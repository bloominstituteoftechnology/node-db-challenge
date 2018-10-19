
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
        tbl.increments().primary();
        tbl.string('description').notNullable();
        tbl.string('notes');
        tbl.integer('project_id').unsigned().refrences('id').inTable('projects');
        tbl.boolean('complete');
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist();
};
