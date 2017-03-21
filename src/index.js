import UsersLib from './lib/UsersLib';
import ROLE from './roles/Roles';

/*UsersLib.processUser({
  vevousername: 'brian.lee@vevo.com',
  roles: [ 'Super Admin' ]
});*/

//UsersLib.process();

UsersLib.addRoleByUsers('cms-youtubeassets-admin', ROLE.TEMPLATE_ADMINISTRATOR, 0, 50);
