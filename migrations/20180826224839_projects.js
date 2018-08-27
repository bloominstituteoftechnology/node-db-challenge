
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
      tbl.increments();

      //name
      tbl
        .string('name', 128)
        .notNullable();

      //description
      tbl
        .string('description', 128)
        .notNullable();
    
      //flag that indicates if the project is complete or not
      tbl  
        .boolean('completed')
        .defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
