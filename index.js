const   express = require('express'),
        Middleware = require('./middleware/middlewares'),
        port = 3050,
        server = express();

     



// import middleware  and call 
Middleware(server);




server.listen(port, function() {
  console.log(`\n ***  -API-  Listening on http://localhost:${port} ***\n`);
});
