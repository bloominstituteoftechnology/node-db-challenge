
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
        tbl.increments();
        tbl.string('description').notNullable();
        tbl.string('notes');
        tbl.integer('project_id');
        tbl.boolean('complete');
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist();
};
