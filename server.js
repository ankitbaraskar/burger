var express = require("express");
var path = require("path");

// DB connection
var connection = require('./config/connection');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, '/public')));
// console.log("path is "+ path.join(__dirname, 'public/assets/js/burgers.js'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

app.use(routes);

// var frontend = require("./public/assets/js/burgers");
// app.use(frontend);


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
