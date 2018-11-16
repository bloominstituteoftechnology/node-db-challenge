

/*== Create Actions Table ======================================================

    An action belongs to only one project. An action has:
        a unique id.
        a description of what needs to be done.
        a notes column to add additional information.
        a flag that indicates if the action has been completed.

*/

//-- Dependencies --------------------------------
const config = require('../../config.js');

//-- Migration Functions -------------------------
exports.up = function(knex, Promise) {
    return knex.schema.createTable(config.TABLE_ACTIONS, table => {
        table.increments(config.FIELD_ID).primary();
        table.string(config.FIELD_DESC).notNullable();
        table.string(config.FIELD_NOTES);
        table.boolean(config.FIELD_COMPLETED).defaultTo(false);
        table.integer(config.FIELD_PROJECT_ID).notNullable();
        table.foreign(config.FIELD_PROJECT_ID)
            .references(`${config.TABLE_PROJECTS}.${config.FIELD_ID}`);
    })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable(config.TABLE_ACTIONS);
};
