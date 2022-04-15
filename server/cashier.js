const res = require('express/lib/response');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dbproject',
    password: 'abcd1234',
    port: 5432,
});

function getCashier(req, res) {
    return new Promise((resolve, reject) => {
        pool.query(`select *
                    from restaurant`, 
                    (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows);
        })
    })
}

module.exports = getCashier;