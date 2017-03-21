import OAuthApi from './OAuthApi';
import config from '../config';

const url = config.api.ripple;

const getUserByEmail = email =>
  OAuthApi.get(`${url}/user/${email}?type=email`).then(response => response.json());

const getBatchUsers = userIds =>
  OAuthApi.get(`${url}/user/batch?${userIds.map(userId => `id=${userId}`).join('&')}`).then(response => response.json());

export default {
  getUserByEmail,
  getBatchUsers
};
