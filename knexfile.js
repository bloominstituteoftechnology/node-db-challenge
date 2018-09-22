// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
	    },
		    seeds: {
		      // add this line
	   directory: './db/seeds',
	    },
    }
  }

