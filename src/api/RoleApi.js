import OAuthApi from './OAuthApi';
import config from '../config';

const url = config.api.conrad;

const getRoles = userId =>
  OAuthApi.get(`${url}/user/${userId}/roles`).then(response => response.json());

const addRole = (userId, role) =>
  OAuthApi.put(`${url}/user/${userId}/role/${role}`);

const deleteRole = (userId, role) =>
  OAuthApi.del(`${url}/user/${userId}/role/${role}`);

/*const getAllUsersFromRole = (role, offset = 0, limit = 20, users = [ ]) =>
  getUsersFromRole(role).then(result => {
    result.total > offset * limit ?
  });*/

const getUsersFromRole = (role, offset = 0, limit = 20) =>
  OAuthApi.get(`${url}/users?role=${role}&offset=${offset}&limit=${limit}`).then(response => response.json());

export default {
  getRoles,
  addRole,
  deleteRole,
  getUsersFromRole
};
