import config from '../config';

export default {
    user: config.db.admin.username,
    password: config.db.admin.password,
    server: config.db.admin.server, // You can use 'localhost\\instance' to connect to named instance
    database: config.db.admin.database,
};
