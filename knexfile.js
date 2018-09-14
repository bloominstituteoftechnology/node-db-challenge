module.exports = {
  development: {
   client: 'sqlite3',
   connection: {
     filename: './data/GTD.sqlite3'
   },
   useNullAsDefault: true,
   migrations: {
     directory: './data/migrations',
   },
   seeds: {
     directory: './data/seeds',
   },
 },
};
