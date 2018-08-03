const express = require('express')
const api = require('./routers/apiRouter')

const server = express();
server.use(express.json());

server.get('/', (req,res) => {
  res.status(200).send('Working!')
})

server.use('/api', api)

server.listen(3000, () => {
  console.log('\n ==== API is running on 3000! ===== \n')
})