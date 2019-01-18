
exports.up = function(knex, Promise) {
    return knex.schema.table('actions', function(tbl){

        tbl.integer('projectId').references('id').inTable('projects');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropColumn('projectId');
  };


