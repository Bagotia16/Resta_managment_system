const res = require('express/lib/response');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dbproject',
    password: 'abcd1234',
    port: 5432,
});

function getChef(req, res) {
    const userId = req.body.userId
    const password = req.body.password

    return new Promise((resolve, reject) => {
        pool.query(`select count(*) 
                    from chef 
                    where chef_id = $1 and 
                    password = $2`, [userId, password], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows);
        })
    })
}

module.exports = getChef;