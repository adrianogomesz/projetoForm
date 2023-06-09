process.title = 'MyWebServer';
 const args = process.argv,
   port = args[2] || 5000,
   webServer = require('./server');

 webServer.listen(port, function() {
   console.log('Server started at port ' + port);
});