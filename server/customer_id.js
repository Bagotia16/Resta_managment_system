const res = require('express/lib/response');

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dbproject',
    password: 'abcd1234',
    port: 5432,
});

function getCustomerId(req, res){
    // console.log("getCustomerId");
    return new Promise((resolve, reject) => {
        pool.query(`select *
                    from restaurant;`, 
                    (error, results) => {
            if (error) {
                reject(error);
            }
            // console.log("results: ", results);
            resolve(results.rows);
        })
    })
}

module.exports = getCustomerId;