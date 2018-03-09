module.exports = {
	// development: {
	// 	client: "mysql",
	// 	connection: { filename: "./database/db.js" }, // change this if you want a different name for the database
	// 	useNullAsDefault: true, // used to avoid warning on console
	// 	migrations: {
	// 		directory: "./database/migrations",
	// 		tableName: "dbmigrations",
	// 	},
	// 	seeds: { directory: "./database/seeds" },
	// debug: true,
	// },
	development: {
		client: "mysql",
		connection: {
			filename: "./database/db",
			host: "localhost", // update this
			user: "user1", // update this with the user you use to connect to MySQL
			password: "user1", // update this with the password of the user you use to connect to MySQL
			database: "projects", // if you want to use a different database change this name
		},
		pool: {
			min: 1,
			max: 10,
		},
		migrations: {
			directory: "./database/migrations",
			tableName: "dbmigrations",
		},
		seeds: { directory: "./database/seeds" },
	},
};
