const res = require('express/lib/response');

const Pool = require('pg').Pool
const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database: 'dbproject',
    password: 'abcd1234',
    port: 5432,
});

function getRestaurantId(req, res){
    const restaurant_id = req.params.restaurant_id;
    const customer_id = req.params.customer_id;   

    // console.log(restaurant_id);
    return new Promise((resolve, reject) => {
        pool.query(`select *
                    from menu
                    where restaurant_name = '${restaurant_id}'`,
                    (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows);
        })
    })
}

module.exports = getRestaurantId;