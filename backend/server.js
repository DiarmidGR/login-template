const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.route');
const config = require('./config/config');


app.use(express.json(), cors());

app.use('/api/auth', authRoutes);

app.listen(config.port, ()=> {
    console.log('Server running on port ' + config.port);
});