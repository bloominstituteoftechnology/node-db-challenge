exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
    tbl.increments();

    tbl.string('description').notNullable();

    tbl.string('notes');

    tbl
      .bool('completed')
      .notNullable()
      .defaultTo('false');
  });
};

exports.down = function(knex) {};
