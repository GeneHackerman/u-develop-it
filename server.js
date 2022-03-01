const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'Kgroove70%dmg',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// this GET is test route to make sure 3001 is connecting
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// this method will return ALL candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// this method returns ONE candidate by primary key
// db.query(`SELECT * FROM candidates WHERE id = 9`, (err, row) =>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//             VALUES (?, ?, ?, ?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     } 
//     console.log(result);
// });

// Default response for any other request (Not Found)
// must be placed below all else as it is a catchall route
// placing it above the GET test route will block connection confirm
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});