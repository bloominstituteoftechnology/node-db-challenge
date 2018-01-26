
exports.up = function(knex, Promise) {
  return createProjectsTable(knex)
    .then(createActionsTable)
    .then(createContextTable)
    .catch(error => {
        console.log(error);
        reject(error);
    });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('projects')
    .then(function() {
        console.log('dropping projects table');
        return knex.schema.dropTableIfExists('actions');
        }
    )
    .then(function() {
        console.log('dropping actions table');
        return knex.schema.dropTableIfExists('contexts');
        }
    )
    .then(function() {
        console.log('dropping contexts table');
        }
    )
    .catch(error => {
        console.log(error);
    });
};

function createProjectsTable(knex) {
    console.log('creating projects table');

    return new Promise(function(resolve, reject) {
        knex.schema.createTable('projects', function(projects) {
            projects.increments('id');
            projects.string('name', 255);
            projects.text('description');
            projets.boolean('completed').defaultTo(false); //don't know if this will work, need to research

            console.log('projects table created');
            resolve(knex);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        });
    });
};

function createActionsTable(knex) {
    console.log('creating actions table');

    return new Promise(function(resolve, reject) {
        knex.schema.createTable('actions', function(actions) {
            actions.increments('id');
            actions.text('description');
            actions.text('notes');
            actions.boolean('completed').defaultTo(false);

            console.log('actions table created');
            resolve(knex);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        });
    });
};

function createContextTable(knex) {
    console.log('creating context table');

    return new Promise(function(resolve, reject) {
        knex.schema.createTable('contexts', function(contexts) {
            contexts.increments('id');
            contexts.string('location', 255);

            console.log('contexts table created');
            resolve(knex);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        });
    });
};
