const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
// must be placed below all else as it is a catchall route
// placing it above the GET test route will block connection confirm
app.use((req, res) => {
    res.status(404).end();
});

// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});


// this GET is test route to make sure 3001 is connecting
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });