exports.up = function(knex) {
    return createProjectsTable(knex)
        .then(createActionsTable)
        .then(createContextsTable)
        .then(createProjectContextsTable)
        .then(createActionsContextsTable)
        .catch(error => {
            console.log(error);
            reject(error);
        });
    };

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projectContexts')
        .then(function() {
            console.log('dropping project contexts');
            return knex.schema
                .dropTableIfExists('actionsContexts')
        }).then(function() {
            console.log('dropping actions contexts');
            return kinex.schema
                .dropTableIfExists('contexts')
        }).then(function() {
            console.log('dropping contexts');
            return knex.schema
                .dropTableIfExists('contexts')
        }).then(function() {
            console.log('dropping actions');
            return knex.schema
                .dropTableIfExists('actions')
        }).then(function() {
            console.log('dropping projects');
            return knex.schema
                .dropTableIfExists('projects')
        }).catch(error => console.log(error));       
    };

function createProjectsTable(knex) {
    console.log('creating projects table');
    return new Promise(function(resolve, reject) {
        knex.schema.createTable('projects', function(projects) {
            projects.increments();
            projects.string('name').notNullable();
            projects.text('description').notNullable();
            projects.boolean('completed').notNullable();
        
            console.log('projects table created');
            resolve(knex);
            }).catch(error => reject(error)); 
        });
}       

function createActionsTable(knex) {
    console.log('creating actions table');
    return new Promise(function(resolve, reject) {
        knex.schema.createTable('actions', function(actions) {
            actions.increments();
            actions.text('description').notNullable();
            actions.boolean('completed').notNullable();
            actions.text('notes');
            actions.integer('pId')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects');
                
            console.log('actions table created');
            resolve(knex);
        }).catch(error => reject(error));
    });
}

function createContextsTable(knex) {
    console.log('creating context table');
    return new Promise(function(resolve, reject) {
        knex.schema.createTable('context', function(context) {
            context.increments();
            context.enum('context', ['home', 'office', 'at computer']).notNullable;
            
            console.log('context table created');
            resolve(knex);
        }).catch(error => reject(error));
    });
}

function createProjectContextsTable(knex) {
    console.log('creating project contexts table');
    return new Promise(function(resolve, reject) {
        knex.schema.createTable('projectContexts', function(projectContexts) {
            projectContexts.increments();
            projectContexts.integer('pId')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects');
            projectContexts.integer('cId')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('contexts');

            console.log('project contexts table created');
            resolve(knex);

        }).catch(error => reject(error));
    });
}

function createActionsContextsTable(knex) {
    console.log('creating actions contexts table');
    return new Promise(function(resolve, reject) {
        knex.schema.createTable('actionsContexts', function(actionsContexts) {
            actionsContexts.increments();
            actionsContexts.integer('aId')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('actions');
            actionsContexts.integer('cId')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('contexts');

            console.log('actions contexts table created');
            resolve(knex);

        }).catch(error => reject(error));
    });
}




