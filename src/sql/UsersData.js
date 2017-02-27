import sql from 'mssql';
import sqlConfig from './SqlConfig';

const getMappedUsers = () =>
  sql.connect(sqlConfig).then(() => {
    let query = 'SELECT a.username, a.vevousername, r.name' +
      ' FROM dbo.admin a' +
      ' JOIN adminrole ar ON a.adminid = ar.adminid' +
      ' JOIN dbo.role r ON ar.roleid = r.roleid' +
      ' WHERE a.disabled = 0 and a.vevousername is not null' +
      ' ORDER BY username';

    return new sql.Request().query(query);
  });

const getRoleUsers = () =>
sql.connect(sqlConfig).then(() => {
  let query = 'SELECT a.username, a.vevousername, r.name' +
    ' FROM dbo.admin a' +
    ' JOIN adminrole ar ON a.adminid = ar.adminid' +
    ' JOIN dbo.role r ON ar.roleid = r.roleid' +
    ' WHERE a.disabled = 0 and (r.name = \'Super Admin\' or r.name = \'Vevo Admin\')' +
    ' ORDER BY username';

  return new sql.Request().query(query);
});

export default {
  getMappedUsers,
  getRoleUsers
};
