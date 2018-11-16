
exports.up = function(knex, Promise) {

  return knex.schema.createTable('actions', table => {

    table.increments(); 
    
    table.string('description', 255);
    table.string('notes', 255);
    table.integer('complete');
    table.timestamps(true, true);

    // table.integer('project_id');
    table
      // .integer('project_id')
      // .unsigned()
      .foreign('id')
      .references('project_id')
      .inTable('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');

};
