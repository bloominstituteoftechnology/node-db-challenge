exports.up = function(knex) {
	return createProjectsTable(knex)
		.then(createActionsTable)
		.then(createContextsTable)
		.then(createContextActionProjectTable)
		.catch(error => {
			console.log("bootstrap error", error);
			reject(error);
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists("contextActionProject")
		.then(function() {
			console.log("dropping contexts");
			return knex.schema.dropTableIfExists("contexts");
		})
		.then(function() {
			console.log("dropping actions");
			return knex.schema.dropTableIfExists("actions");
		})
		.then(function() {
			console.log("dropping projects");
			return knex.schema.dropTableIfExists("projects");
		})
		.catch(error => console.log("rollback error", error));
};

function createProjectsTable(knex) {
	console.log("creating projects table");

	return new Promise(function(resolve, reject) {
		knex.schema
			.createTable("projects", projects => {
				projects.increments();
				projects.string("name", 128).notNullable();
				projects.string("description", 1000).notNullable();
				projects.boolean("isComplete").defaultTo(false);
				projects.timestamp("createdAt").defaultTo(knex.fn.now());

				console.log("projects table created");
				resolve(knex);
			})
			.catch(err => reject(err));
	});
}

function createActionsTable(knex) {
	console.log("creating actions table");

	return new Promise(function(resolve, reject) {
		knex.schema
			.createTable("actions", actions => {
				actions.increments();
				actions.string("item", 128).notNullable();
				actions.string("details", 1000).notNullable();
				actions.boolean("isComplete").defaultTo(false);
				actions.timestamp("createdAt").defaultTo(knex.fn.now());

				console.log("actions table created");
				resolve(knex);
			})
			.catch(err => reject(err));
	});
}

function createContextsTable(knex) {
	console.log("creating contexts table");

	return new Promise(function(resolve, reject) {
		knex.schema
			.createTable("contexts", contexts => {
				contexts.increments();
				contexts.string("context", 64).notNullable();
				contexts.timestamp("createdAt").defaultTo(knex.fn.now());

				console.log("contexts table created");
				resolve(knex);
			})
			.catch(err => reject(err));
	});
}

function createContextActionProjectTable(knex) {
	console.log("creating contextActionProject table");

	return new Promise(function(resolve, reject) {
		knex.schema
			.createTable("contextActionProject", cap => {
				cap.increments();

				cap
					.integer("contextID")
					.unsigned()
					.notNullable()
					.references("id")
					.inTable("contexts");
				cap
					.integer("actionID")
					.unsigned()
					.notNullable()
					.references("id")
					.inTable("actions");
				cap
					.integer("projectID")
					.unsigned()
					.notNullable()
					.references("id")
					.inTable("projects");

				cap.timestamp("createdAt").defaultTo(knex.fn.now());

				console.log("actions table created");
				resolve(knex);
			})
			.catch(err => reject(err));
	});
}
