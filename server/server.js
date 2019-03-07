const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicPath));

//var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
//var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

// app.listen(port, () => {
//     console.log(`Server is up on port ${port}`);
// });