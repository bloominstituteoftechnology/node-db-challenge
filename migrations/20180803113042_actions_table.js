exports.up = function(knex, Promise) {
  //create the actions table
  return knex.schema.createTable('actions', function(tbl) {
    tbl.increments(); //creates id

    tbl
      .string('description', 500)
      .notNullable()
      .defaultTo('Not Provided');

    tbl.string('notes', 500).defaultTo('Not Provided');

    tbl.boolean('is_completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
