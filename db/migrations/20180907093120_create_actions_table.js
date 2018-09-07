
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
        tbl.increments('id');
        tbl.string('short_description');
        tbl.string('notes')
        tbl.integer('project_id')
        tbl.bool('completed').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
  };
  