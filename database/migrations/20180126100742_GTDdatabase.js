
exports.up = function(knex) {
  return createProjectsTable(knex)
    .then(createActionsTable)
    .then(createContextsTable)
    .then(createProjectsContextsTable)
    .then(createActionsContextsTable)
    .catch(error => {
    	console.log(error);
    });  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projectscontexts')
    .then(() => {
      console.log('dropping actionscontexts');
      return knex.schema.dropTableIfExists('actionscontexts');
    })
    .then(() => {
    	console.log('dropping contexts');
    	return knex.schema.dropTableIfExists('contexts');
    })
    .then(() => {
    	console.log('dropping actions');
    	return knex.schema.dropTableIfExists('actions');
    })
    .then(() => {
    	console.log('dropping projects');
    	return knex.schema.dropTableIfExists('projects');
    })
};

const createProjectsTable = (knex) => {
    console.log('creating projects table');

	return new Promise((resolve, reject) => {
		knex.schema
		  .createTable('projects', (projects) => {
		  	projects.increments();
		  	projects.string('name', 128).notNullable();
		  	projects.text('description').notNullable();
		  	projects.boolean('completed').notNullable();
		  	projects.timestamp('createdAt').defaultTo(knex.fn.now());

		  	console.log('projects table created');
		  	resolve(knex);
		  })
		  .catch(error => reject(error));
	})
}

const createActionsTable = (knex) => {
	console.log('creating actions table');

	return new Promise((resolve, reject) => {
		knex.schema
		  .createTable('actions', (actions) => {
		  	actions.increments();
		  	actions.text('description').notNullable();
		  	actions.text('notes').notNullable();
		  	actions.boolean('completed').notNullable();
		  	actions.timestamp('createdAt').defaultTo(knex.fn.now());

		  	console.log('actions table created');
		  	resolve(knex);
		  })
		  .catch(error => reject(error));
	})
}

const createContextsTable = (knex) => {
	console.log('creating contexts table');

	return new Promise((resolve, reject) => {
		knex.schema
		  .createTable('contexts', (contexts) => {
		  	contexts.increments();
		  	projects.string('context', 256).notNullable();
		  	contexts.timestamp('createdAt').defaultTo(knex.fn.now());

		  	console.log('contexts table created');
		  	resolve(knex);
		  })
		  .catch(error => reject(error));
	})
}

const createProjectsContextsTable = (knex) => {
	console.log('creating projectscontexts table');

	return new Promise((resolve, reject) => {
 		knex.schema
 		  .createTable('projectscontexts', (projectscontexts) => {
 		  	projectscontexts.increments();
 		  	projectscontexts
 		  	  .integer('projectId')
 		  	  .unsigned()
 		  	  .notNullable()
 		  	  .references('id')
 		  	  .inTable('projects');
 		  	projectscontexts
 		  	  .integer('contextId')
 		  	  .unsigned()
 		  	  .notNullable()
 		  	  .references('id')
 		  	  .inTable('contexts');

 		  	console.log('projectscontexts table created');
 		  	resolve(knex);
 		  })
 		  .catch(error => reject(error));
	});
}

const createActionsContextsTable = (knex) => {
	console.log('creating projectscontexts table');

	return new Promise((resolve, reject) => {
 		knex.schema
 		  .createTable('actionscontexts', (actionscontexts) => {
 		  	actionscontexts.increments();
 		  	actionscontexts
 		  	  .integer('actionId')
 		  	  .unsigned()
 		  	  .notNullable()
 		  	  .references('id')
 		  	  .inTable('actions');
 		  	actionscontexts
 		  	  .integer('contextId')
 		  	  .unsigned()
 		  	  .notNullable()
 		  	  .references('id')
 		  	  .inTable('contexts');

 		  	console.log('actionscontexts table created');
 		  	resolve(knex);
 		  })
 		  .catch(error => reject(error));
	});
}
