// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set public folder as static directory
app.use(express.static(path.join(__dirname, 'public')));

// Redirect root to index.html
app.get('/', (req, res) => {
    res.redirect('/index.html');
});
app.get('/ttth', (req, res) => {
    res.redirect('/testtimeth.html');
});
app.get('/tkpb', (req, res) => {
    res.redirect('/testkpbutton.html');
});
app.get('/tbf', (req, res) => {
    res.redirect('/testbillform.html');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});