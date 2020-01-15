const server = require('./server.js');
const port = process.env.PORT || 4008;


server.listen(port, () => {
    console.log('\n* Server started http://localhost:4008 *\n')
});
 
//should run dependencies for db and middleware 