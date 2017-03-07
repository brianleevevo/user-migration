import Promise from 'bluebird';
import log from 'winston';
import UsersData from '../sql/UsersData';
import { RippleApi, RoleApi } from '../api';
import mapAdminRoles from '../roles/MappedRoles';

const getUsers = async () => {
  try {
    const users = await UsersData.getMappedUsers();
    return users.reduce((accumulator, current) => {
      const currentUser = accumulator.find(a => a.vevousername === current.vevousername);

      if (!currentUser) {
        return [
          ...accumulator,
          {
            username: current.username,
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

    if (!user.vevo_user_id)
      log.info(`Missed User: ${adminUser.username}`);

    const oldRoles = await RoleApi.getRoles(user.vevo_user_id);
    log.info(oldRoles);

    if (adminUser.roles) {
      const newRoles = mapAdminRoles(adminUser.roles);
      log.info(newRoles);
      await Promise.map(newRoles, newRole => RoleApi.addRole(user.vevo_user_id, newRole), { concurrency: 3 });
      const updatedRoles = await RoleApi.getRoles(user.vevo_user_id);
      log.info(updatedRoles);
    }
  } catch (err) {
    log.error(err);
    throw err;
  }
};

export default {
  process,
  processUser
};
