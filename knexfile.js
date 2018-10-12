// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lambda.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};

// now add a knex:migrate make --> knex seed:make


/*
  1. make projects table
  2. make actions table
  3. make notes table
  4. make actions -> notes connection table as a _many to many_ relationship
*/