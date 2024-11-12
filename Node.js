const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Sample user data for demonstration purposes
let users = [];

// Signup route
app.post('/signup', (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;
    
    // Here you would typically check for existing users and save to database
    users.push({ firstName, lastName, username, email, password });
    
    res.status(200).send("User registered successfully. Check your email for confirmation code.");
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Here you would typically validate user credentials
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        res.status(200).send("Login successful.");
    } else {
        res.status(401).send("Invalid credentials.");
    }
});

app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});
