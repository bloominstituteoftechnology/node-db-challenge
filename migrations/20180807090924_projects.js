
exports.up = function(knex, Promise) {
    //Create Table Projects 
  return knex.schema.createTable('projects', function(projects){
    projects.increments();
    projects.text('project_name', 128).notNullable()
    projects.string('description', 255).notNullable()
    projects.boolean('isCompleted').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
    //drops projects Table 
  return knex.schema.dropTable('projects')
};
