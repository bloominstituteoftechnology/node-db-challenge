exports.up = function(knex, Promise) {
  //create the actions table
  return knex.schema.createTable('actions', function(tbl) {
    tbl.increments(); //creates id

    tbl
      .string('description', 500)
      .notNullable()
      .defaultTo('');

    tbl.string('notes', 500).defaultTo('');

    tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
