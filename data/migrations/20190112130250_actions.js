
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
        tbl.increments();
        tbl.string('action_description', 255).notNullable();
        tbl.string('action_notes', 255);
        tbl.boolean('action_completed');
        tbl.integer('project_id')
        .unsigned().references('id').inTable('projects');
    });

};
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
}
