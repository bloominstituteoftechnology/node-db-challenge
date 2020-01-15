const server = require('./server.js');
const port = process.env.PORT || 5000;


server.listen(port, () => {
    console.log('\n* Server started http://localhost:5000 *\n')
});
 
//should run dependencies for db and middleware 