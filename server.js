var express = require('express');

// Create our app
var app = express();

// specifiy folder to use for default path to read
app.use(express.static('public'));

// port to launch
app.listen(3000, function() {
  console.log('Express is up on port 3000');
});
