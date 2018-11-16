
exports.up = function(knex, Promise) {
    return knex.schema.createTable('context', tbl => {
        tbl.increments();
        tbl.boolean('at_home');
        tbl.boolean('at_computer');
        tbl.boolean('at_bank');
        tbl.integer('action_id')
            .unsigned()
            .references('id')
            .inTable('action');
    })
};

exports.down = function(knex, Promise) {
  
};
