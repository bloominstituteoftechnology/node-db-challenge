const server = require('./api/server');

const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {
  console.log(`\nYou are listening on port ${PORT}...\n`);
});

// here's a little code I wrote, you might want add data to show, don't worry be happy
// every file has data access code? extract it out and make a model, don't worry model.exports it
// ain't got no sense of what's knex, just concentrate on single steps, don't worry, you'll master it
// your boss wants a complex report, write some SQL to query all, don't worry, just join it
// have the requirements all laid out, it's time to model entities out, don't worry, relate them
// many to many we need to enable , it's time to bust-out that third table, don't worry relate it