var express = require('express');
var cors = require('cors');
require('dotenv').config();

var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/src/views/index.html');
});

app.use('/api/fileanalyse', require('./src/routes/fileanalyse'));
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
