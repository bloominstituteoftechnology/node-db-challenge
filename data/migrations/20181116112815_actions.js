
exports.up = function(knex, Promise) {

  return knex.schema.createTable('actions', table => {

    table.increments(); 
    
    table.string('description', 255);
    table.string('notes', 255);
    table.integer('complete');
    table.timestamps(true, true);

    table.string('project_id', 255)
    tableg
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');

};
