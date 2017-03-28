export default {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, // You can use 'localhost\\instance' to connect to named instance
  database: process.env.DB_DATABASE
};
