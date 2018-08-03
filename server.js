const express = require('express')

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
  res.status(200).send('Working!')
})

server.listen(3000, () => {
  console.log('\n ==== API is running on 3000! ===== \n')
})