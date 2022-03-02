const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection({
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Kgroove70%dmg',
        database: 'election'
});


module.exports = db;