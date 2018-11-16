

/*== Create Projects Table =====================================================

    A project can contain multiple actions and has:
        a unique Id.
        a name.
        a description.
        a flag that indicates if the project is complete or not.

*/

//-- Dependencies --------------------------------
const config = require('../../config.js');

//-- Migration Functions -------------------------
exports.up = function(knex, Promise) {
    return knex.schema.createTable(config.TABLE_PROJECTS, table => {
        table.increments(config.FIELD_ID).primary();
        table.string(config.FIELD_NAME).notNullable();
        table.string(config.FIELD_DESC).notNullable();
        table.boolean(config.FIELD_COMPLETE);
    })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable(config.TABLE_PROJECTS);
};
