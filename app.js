var express = require('express');
var app = express();


app.post('/alert', (req, res) => {
  res.sendFile(__dirname + '/alert.html')
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
