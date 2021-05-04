//EXPRESS
var express = require('express');
var app = express();
//Puerto 
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file


// index page
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});
//Ruta Home
  app.get('/home', function(req, res) {
    res.render('pages/home');
  });
//Ruta About
  app.get('/about', function(req, res) {
    res.render('pages/about');
  });
//Ruta Login
  app.get('/login', function(req, res) {
    res.render('pages/login');
  });


//Puerto escuchando
  app.listen(port, () => {
    console.log(`Aplicacion escuchando en el puerto: http://localhost:${port}`)
  })