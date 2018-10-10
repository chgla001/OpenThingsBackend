const express = require('express');
const app = express();

const http = require('http').Server(app),
    bodyParser = require('body-parser'),
    cors = require('cors');

const folderlist = require('./routes/folderlist-route');

const PORT = 4000;

// middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/folderlist', folderlist);
// app.use('/messages', messages);

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

http.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});