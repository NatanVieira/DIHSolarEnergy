//Install express server
const express = require('express');
const path    = require('path');

const app = express();

//Server only the static files form the dist directory
app.use(express.static('./dist/dihsolar-energy'));
app.get('/*',(req, res) => res.sendFile('index.html', {root: 'dist/dihsolar-energy/'}));

//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);