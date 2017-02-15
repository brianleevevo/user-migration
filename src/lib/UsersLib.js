import Promise from 'bluebird';
import log from 'winston';
import UsersData from '../sql/UsersData';
import { RippleApi, RoleApi } from '../api';
import mapAdminRoles from '../roles/MappedRoles';

const getUsers = async () => {
  try {
    const users = await UsersData.getUsers();
    return users.reduce((accumulator, current) => {
      const currentUser = accumulator.find(a => a.vevousername === current.vevousername);

      if (!currentUser) {
        return [
          ...accumulator,
          {
            vevousername: current.vevousername,
            roles: [
              current.name
            ]
          }
        ];
      }

      currentUser.roles = [ ...currentUser.roles, current.name ];
      return accumulator;

    }, [ ]);
  } catch (err) {
    log.error(err);
    throw err;
  }
};

const process = async () => {
  const adminUsers = await getUsers();

  adminUsers.forEach(adminUser => {
    log.info(adminUser);
    processUser(adminUser);
  });
};

const processUser = async adminUser => {
  try {
    const user = await RippleApi.getUserByEmail(adminUser.vevousername);
    log.info(user.vevo_user_id);

    const oldRoles = await RoleApi.getRoles(user.vevo_user_id);
    log.info(oldRoles);

    const newRoles = mapAdminRoles(adminUser.roles);
    await Promise.map(newRoles, newRole => RoleApi.addRole(user.vevo_user_id, newRole), { concurrency: 3 });
    const updatedRoles = await RoleApi.getRoles(user.vevo_user_id);

    log.info(updatedRoles);
  } catch (err) {
    log.error(err);
    throw err;
  }
};

export default {
  process,
  processUser
};
