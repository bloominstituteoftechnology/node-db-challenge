

/*== Create Contexts Table, and actions / contexts association table ===========

    Add support for the concept of contexts.
    A context is something like at home, at work or at computer.
    The idea is that some actions require one or more contexts in order to be
        worked on.
    For example, the action of file income taxes may require that you are at
        home, at computer and online so if you are at work and look at the list
        of pending actions you could do in your current context, filing your
        taxes will not be one of them.
    A context can be applied to more than one action. An action can be tied to
        more than one context, like in the example above.

*/

//-- Dependencies --------------------------------
const config = require('../../config.js');

//-- Migration Functions -------------------------
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable(config.TABLE_CONTEXTS, table => {
            table.increments(config.FIELD_ID).primary();
            table.string(config.FIELD_NAME).notNullable();
        }),
        knex.schema.createTable(config.TABLE_ACTION_CONTEXTS, table => {
            table.integer(config.FIELD_ACTION_ID).notNullable();
            table.foreign(config.FIELD_ACTION_ID)
                .references(`${config.TABLE_ACTIONS}.${config.FIELD_ID}`);
            table.integer(config.FIELD_CONTEXT_ID).notNullable();
            table.foreign(config.FIELD_CONTEXT_ID)
                .references(`${config.TABLE_CONTEXTS}.${config.FIELD_ID}`);
        }),
    ]);
};
exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable(config.TABLE_CONTEXTS       ),
        knex.schema.dropTable(config.TABLE_ACTION_CONTEXTS),
    ]);
};
