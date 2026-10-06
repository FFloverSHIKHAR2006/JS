const express = require("express");

const app = express();
const PORT = 3001;

// Middleware to check login status
function checkLogin(req, res, next) {
    const loggedIn = true;
    if (loggedIn) {
        next();
    } else {
        res.status(401).send("Please Login");
    }
}

// Route using checkLogin middleware
app.get("/profile", checkLogin, (req, res) => {
    res.send("Welcome to your profile");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});