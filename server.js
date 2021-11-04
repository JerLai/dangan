/* jshint esversion: 6 */

/************************
 * Import *
 ************************/

const express = require('express');
const http = require('http');

 /****************
 * Set up Server *
 ****************/
// app
const app = express();
const PORT = 3000;
let server = http.createServer(app);

app.use(express.static('build'));
server.listen(PORT, function (err) {
  if (err) console.log(err);
  else console.log("HTTP server on http://localhost:%s", PORT);
});