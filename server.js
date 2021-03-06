const express = require("express");
const bodyParser = require("body-parser");
const favicon = require('serve-favicon');
const app = express();

app.use(favicon(__dirname + '/favicon.ico'));
app.use(express.static(__dirname + "/client/static"));
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

require("./server/config/routes.js")(app);

app.listen(8000, function(){
  console.log("listening on port 8000");
});