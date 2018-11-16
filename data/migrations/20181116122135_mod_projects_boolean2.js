
exports.up = function(knex, Promise) {
    return knex.schema.table('projects', function(tbl){
        tbl.dropColumn('complete');
        tbl.boolean('completed').defaultTo('false');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('projects', (tbl) =>{
      tbl.dropColumn('completed')
      tbl.boolean('complete')
    })
  };
  