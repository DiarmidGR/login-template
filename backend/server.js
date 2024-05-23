const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const app = express();


dotenv.config();
const db = require('./config/db.config');

app.use(express.json(), cors());

app.listen(3001, ()=> {
    console.log('Server running on port 3001');
});

// Login Route
app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({message: 'Please provide both username and password.'});
    }

    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], async (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            return res.status(401).json({message: 'User not found.'});
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(401).json({message: 'Invalid credentials.'});
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    });
});