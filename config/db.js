const mysql = require('mysql2');



const connection = mysql.createConnection({
    database: 'express_db',
    user: 'admin',
    password: 'admin',
    port: 5506, 
})

connection.connect((error) => {
    if(error) {
        console.log('Failed to connect mysql.');
    }else {
        console.log('Connected successfully.'); 
    }
})

module.exports = connection; 