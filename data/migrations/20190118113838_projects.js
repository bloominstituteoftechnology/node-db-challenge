exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
        tbl.increments();
 
        tbl
        .string('name', 255)
        .notNullable()
        .unique('uq_projects_name');

        tbl.text('description');

        tbl.boolean('completed').defaultTo(0);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };
