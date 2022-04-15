const res = require('express/lib/response');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dbproject',
    password: 'abcd1234',
    port: 5432,
});

function getCustomer(req, res) {
    const name = req.body.name
    const contact = req.body.contact
    const userId = req.body.userId
    const password = req.body.password

    // example:
    // C9116224805
    // RraXBsfmwC
    // console.log(name, contact, userId, password)
    // console.log(name.charCodeAt(0))

    if(name == "" || contact == "") {
        console.log("name or contact is null");
        // login
        return new Promise((resolve, reject) => {
            pool.query(`select count(*) 
                        from customer 
                        where customer_id = $1 and 
                            password = $2`, 
                        [userId, password], (error, results) => {
                if (error) {
                    reject(error);
                }
                // console.log("results: ", results);
                resolve(results.rows);
            })
        })
    }
    else{
        // signup
        console.log("signup");
        return new Promise(function(resolve, reject){
            pool.query(`INSERT INTO 
                        customer (customer_id, name, contact, password) 
                        VALUES ($1, $2, $3, $4)`, 
                        [userId, name, contact, password], (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve({"status":"ok"});
            })
        })
    }
}

module.exports = getCustomer;