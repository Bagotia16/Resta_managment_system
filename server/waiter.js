const res = require('express/lib/response');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dbproject',
    password: 'abcd1234',
    port: 5432,
});

function getWaiter(req, res) {
    const userId = req.body.userId
    const password = req.body.password

    return new Promise((resolve, reject) => {
        pool.query(`select count(*) 
                    from waiter 
                    where waiter_id = $1 and 
                    password = $2`, [userId, password], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows);
        })
    })
}

module.exports = getWaiter;