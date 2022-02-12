const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: "Port number",
  host: "Hostname",
  user: "Username",
  password: "Password",
  database: "Database name",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;