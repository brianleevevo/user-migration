import UsersLib from './lib/UsersLib';
import { log } from './utils/Log';

/*UsersLib.processUser({
  vevousername: 'brian.lee@vevo.com',
  roles: [ 'Super Admin' ]
});*/

//

const opts = {
  runMode: '',
  userRole: '',
  addRole: ''
};

process.argv.forEach(val => {
  const vals = val.split('=');
  switch (vals[0]) {
  case '--add-role':
    opts.runMode = 'add-role';
    return;
  case 'user-role':
    opts.userRole = vals[1];
    return;
  case 'new-role':
    opts.addRole = vals[1];
    return;
  default:
    return;
  }
});

if (opts.runMode === 'add-role' && opts.addRole && opts.userRole)
  UsersLib.addRoleByUsers(opts.addRole, opts.userRole, 0, 1000)
    .then(() => log(`Role ${opts.addRole} added successfully to users with role ${opts.userRole}`));

log('Bad arguments');
