exports.up = function(knex, Promise) {
    return knex.schema.table('actions', tbl => {
        tbl.boolean('Requires_At_Home');
        tbl.boolean('Requires_At_Work');
        tbl.boolean('Requires_At_Computer');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('actions', tbl => {
        tbl.dropColumn('Requires_At_Home')
        tbl.dropColumn('Requires_At_Work')
        tbl.dropColumn('Requires_At_Computer')
    });
  };