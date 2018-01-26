
exports.up = function(knex) {
    return CreateProjectsTable(knex)
        .then(createActionsTable)
        .then(createContextsTable)
        .catch(error => {
            console.log(error);
            reject(error);
        });
    };

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('contexts')
        .then(function() {
            console.log('dropping contexts');
            return knex.schema.dropTableIfExists('contexts');
        }).then(function() {
            console.log('dropping actions');
            return knex.schema.dropTableIfExists('actions');
        }).then(function() {
            console.log('dropping projects');
            return knex.schema.dropTableIfExists('projects');
        }).catch(error => console.log(error));       
    };

function createProjectsTable(knex) {
    console.log('creating projects table');
    return new Promise(function(resolve, reject) {
        knex.schema.createTable('projects', function(projects)  {
        projects.increments('id').unique();
        projects.string('name').notNullable();
        projects.text('description').notNullable();
        projects.boolean('completed').defaultTo(false);
        projects
            .integer(projectActionsId)
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users');
        projects
            .string('context')
            .references('context')
            .inTable('context');
            
        console.log('projects table created');
        resolve(knex);
        }).catch(error => reject(error)); 
    });
}       

function createActionsTable(knex) {
    console.log('creating actions table');
    return new Promise(function(resolve, reject) {
        knex.schema.createTable('actions', function(actions) {
            actions.increments('id').unique();
            actions.text('description');
            actions.boolean('completed').defaultTo(false);
            actions
                .string('context')
                .references('context')
                .inTable('context');

            console.log('actions table created');
            resolve(knex);
        }).catch(error => reject(error));
    });
}

function createContextTable(knex) {
    console.log('creating context table');
    return new Promise(function(resolve, reject) {
        knex.schema.createTable('context', function(context) {
            context.increments('id').unique();
            context.enu('context', ['home', 'office', 'at computer']);
            
            console.log('context table created');
            resolve(knex);
        }).catch(error => reject(error));
    });
}






