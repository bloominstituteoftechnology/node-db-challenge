exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl
      .string('name')
      .notNullable()
      .unique();
    tbl.string('description').notNullable();
    tbl.boolean('complete');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
