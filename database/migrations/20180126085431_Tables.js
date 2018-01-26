
exports.up = function (knex, Promise) {
    return createProjectsTable(knex)
        .then(createActionsTable)
        .then(createContextTable)
        .then(createProjectsActionsTable)
        .then(createActionsContextTable)
        .catch(error => {
            console.log(error);
            reject(error);
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('projectscontext')
        .then(function () {
            console.log('dropping projectsactions');
            return knex.schema.dropTableIfExists('projectsactions');
        })
        .then(function () {
            console.log('dropping context');
            return knex.schema.dropTableIfExists('context');
        })
        .then(function () {
            console.log('dropping actions');
            return knex.schema.dropTableIfExists('actions');
        })
        .then(function () {
            console.log('dropping projects');
            return knex.schema.dropTableIfExists('projects');
        })
};

function createProjectsTable(knex) {
    console.log('creating projects table');
    return new Promise(function (resolve, reject) {
        knex.schema
            .createTable('projects', function (projects) {
                projects.increments().unique();
                projects.string('name', 128).notNullable();
                projects.text('description').notNullable;
                projects.boolean('is_completed');
                console.log('projects table created');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}

function createActionsTable(knex) {
    console.log('creating actions table');
    return new Promise(function (resolve, reject) {
        knex.schema
            .createTable('actions', function (actions) {
                actions.increments().unique();
                actions.text('description').notNullable();
                actions.text('notes').notNullable();
                actions
                    .integer('projectId')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('actions');
                actions.boolean('is_completed');
                console.log('actions table created');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}

function createContextTable(knex) {
    console.log('creating context table');
    return new Promise(function (resolve, reject) {
        knex.schema
            .createTable('context', function (context) {
                context.increments().unique();
                context.string('context').notNullable();
                console.log('context table created');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}

function createProjectsActionsTable(knex) {
    console.log('creating projectsactions table');

    return new Promise(function (resolve, reject) {
        knex.schema
            .createTable('projectsactions', function (projectsactions) {
                projectsactions.increments();
                projectsactions
                    .integer('projectsId')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('projects');
                projectsactions
                    .integer('actionsId')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('action');
                console.log('projectsactions table created');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}

function createActionsContextTable(knex) {
    console.log('creating actionscontext table');

    return new Promise(function (resolve, reject) {
        knex.schema
            .createTable('actionscontext', function (actionscontext) {
                actionscontext.increments();
                actionscontext
                    .integer('actionsId')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('actions');
                actionscontext
                    .integer('contextId')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('context');
                console.log('actionscontext table created');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}
