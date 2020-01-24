const server = require(`./server`);

const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`\n API listening on Port ${port} \n`)
);
