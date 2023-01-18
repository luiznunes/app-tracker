// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: '192.168.3.8',
//   database: 'postgres',
//   password: 'postgres',
//   port: 5432,
// });

// const getRegisters = () => {
//     return new Promise(function(resolve, reject) {
//       pool.query('SELECT * FROM registers ORDER BY id ASC', (error, results) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(results.rows);
//       })
//     }) 
// }
  
// module.exports = {
// getRegisters,
// }