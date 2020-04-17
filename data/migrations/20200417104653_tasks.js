exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments();

    tbl.string('description').notNullable();
    tbl.string('notes');
    tbl.bool('completed').defaultTo('false');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
