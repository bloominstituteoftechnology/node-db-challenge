
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('projects', (tbl) => {
            tbl.increments('id').primary();
            tbl.string('name').notNullable();
            tbl.string('description').defaultTo('');
            tbl.boolean('completed').defaultTo(false);
        }),
        knex.schema.createTable('actions', (tbl) => {
            tbl.increments('id').primary();
            tbl.string('description').defaultTo('');
            tbl.text('notes').defaultTo('');
            tbl.boolean('completed').defaultTo(false);
        }),
        knex.schema.createTable('contexts', (tbl) => {
            tbl.increments('id').primary();
            tbl.string('context').notNullable().unique('context', 'uq_context');
        }),
        // Junction Tables Here
        knex.schema.createTable('projects_actions', (tbl) => {
            tbl.increments('id').primary();
            tbl.int('projectId').references('id').inTable('projects');
            tbl.int('actionsId').references('id').inTable('actions');
        }),
        knex.schema.createTable('projects_contexts', (tbl) => {
            tbl.increments('id').primary();
            tbl.int('projectId').references('id').inTable('projects');
            tbl.int('contextId').references('id').inTable('contexts');
        }),
        knex.schema.createTable('action_contexts', (tbl) => {
            tbl.increments('id').primary();
            tbl.int('actionId').references('id').inTable('actions');
            tbl.int('contextId').references('id').inTable('contexts');
        }),
    ]);
};

exports.down = function (knex, Promise) {

};
