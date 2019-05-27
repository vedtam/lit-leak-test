var express = require('express');
var server = express();

server.use(express.static(__dirname + '/public'));

server.get('^([^.]+)$', function(req, res, next){
  res.sendFile("index.html", {root: './public/'});
});

server.listen(9000, () => {
  console.log(`Server listening on port 9000`)
});
