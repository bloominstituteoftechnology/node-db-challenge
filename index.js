const   express = require('express'),
        //Middleware = require('./MIddleware/Middleware'),
        port = 5050,
        server = express();

     



// import middleware  and call 
//Middleware(server);




server.listen(port, function() {
  console.log(`\n ***  -API-  Listening on http://localhost:${port} ***\n`);
});
