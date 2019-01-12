
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
      tbl.increments();
      tbl.string('project_name', 255).notNullable();
      tbl.string('proj_description', 255);
      tbl.boolean('proj_completed');
    });
  
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
