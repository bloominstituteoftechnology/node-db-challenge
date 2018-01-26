
exports.up = function (knex, Promise) {
    return createProjectsTable(knex)
        .then(createActionsTable)
        .then(createContextTable)
        .then(createProjectsActionsTable)
        .then(createContextTable)
        .then(createProjectsContextTable)
        .catch(error => {
            console.log(error);
            reject(error);
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('projectscontext')
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
        .catch(error => console.log(error));
};

function createProjectsTable(knex) {
    console.log('creating projects table');
    return new Promise(function (resolve, reject) {
        knex.schema
            .createTable('projects', function (projects) {
                projects.increments();
                projects.string('name', 128).notNullable();
                projects.timestamp('createdAt').defaultTo(knex.fn.now());
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
                actions.increments();
                actions.text('text').notNullable();
                actions
                    .integer('projectId')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('actions');
                actions.timestamp('createdAt').defaultTo(knex.fn.now());
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
                context.increments();
                context.text('text').notNullable();
                context.timestamp('createdAt').defaultTo(knex.fn.now());
                console.log('context table created');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}


function createProjectsActionsTable(knex) {
    console.log('creating posts table');

    return new Promise(function (resolve, reject) {
        knex.schema
            .createTable('posts', function (posts) {
                posts.increments(); // id for posts
                posts.text('text').notNullable();

                posts // one user, many posts / fields of poststable must match userstable
                    .integer('userId') // references userID in userstable
                    .unsigned() // no negative signs for incremented userID, if not negative then can store much higher number in that space
                    .notNullable()
                    .references('id') // the userID will ref the id in the users table, foreign key reference primary keys in another table
                    .inTable('users');
                posts.timestamp('createdAt').defaultTo(knex.fn.now());

                console.log('posts table created');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}


function createActionsContextTable(knex) {
    console.log('creating posts table');

    return new Promise(function (resolve, reject) {
        knex.schema
            .createTable('posts', function (posts) {
                posts.increments(); // id for posts
                posts.text('text').notNullable();

                posts // one user, many posts / fields of poststable must match userstable
                    .integer('userId') // references userID in userstable
                    .unsigned() // no negative signs for incremented userID, if not negative then can store much higher number in that space
                    .notNullable()
                    .references('id') // the userID will ref the id in the users table, foreign key reference primary keys in another table
                    .inTable('users');
                posts.timestamp('createdAt').defaultTo(knex.fn.now());

                console.log('posts table created');
                resolve(knex);
            })
            .catch(error => reject(error));
    });
}
