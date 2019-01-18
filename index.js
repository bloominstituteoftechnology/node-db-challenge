// import your node modules

const express = require('express');
const server = express();
const requireAll = require('require-all');
var _ = require('lodash');
server.use(express.json());

// add your server code starting here
server.listen(5000, () => console.log('server running'));

process.setMaxListeners(0);

const controllers = requireAll(__dirname + '/src/endpoints');
_.each(controllers, (endpoints, controller) => {
  _.each(endpoints, (definition, endpoint) => {
  	console.log(`${endpoint}: /api/${controller}${definition.url}`);
    server[definition.type.toLowerCase()](
    	`/api/${controller}${definition.url}`, 
    	definition.handler
    );
  });
});
