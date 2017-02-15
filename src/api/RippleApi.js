import OAuthApi from './OAuthApi';
import config from '../config';

const url = config.api.ripple;

const getUserByEmail = email =>
  OAuthApi.get(`${url}/user/${email}?type=email`).then(response => response.json());

export default {
  getUserByEmail
};
