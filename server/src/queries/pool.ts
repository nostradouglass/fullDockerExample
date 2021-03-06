const Pool = require("pg").Pool;
const keys = require('../keys')

const pool = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});
  
  export default pool;