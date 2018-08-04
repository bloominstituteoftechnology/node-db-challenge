exports.up = function(knex, Promise) {
  //create the projects table
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments(); //creates id

    tbl
      .string('name', 256)
      .notNullable()
      .unique()
      .defaultTo('');

    tbl.string('description', 500).defaultTo('');
    tbl.string('actions', 1000).defaultTo('');
    tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
