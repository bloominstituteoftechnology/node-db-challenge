
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        tbl.increments();
  
        tbl 
        .string('name', 128)
        .notNullable()
        .unique();
  
        tbl
        .text('project description')
        .notNullable();
  
        tbl
        .boolean('project complete').defaultTo(false);
  
   });
  };
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('projects');
  };
