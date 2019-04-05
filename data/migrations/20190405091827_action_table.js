
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
        tbl.string('notes').notNullable();
        tbl.boolean('finished').defaultTo(false);
        tbl.integer('action_id')
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
