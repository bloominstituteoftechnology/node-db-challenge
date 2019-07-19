
exports.up = function(knex) {
  return knex.schema
    .createTable('actions_contexts', tbl => {
      tbl.increments();

      tbl
        .integer('action_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('actions')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
      
      tbl
        .integer('context_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('contexts')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('actions_contexts');
};
