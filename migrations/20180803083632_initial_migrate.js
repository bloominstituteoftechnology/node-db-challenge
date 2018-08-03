
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()

    tbl
        .string('name', 256)
        .notNullable()
        .unique()
    tbl 
        .string('description')
        .notNullable()
    tbl
        .integer('completed')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
