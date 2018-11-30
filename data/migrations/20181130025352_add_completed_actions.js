exports.up = function(knex, Promise) {
    return knex.schema.table('actions', tbl => {
        tbl.boolean('completed').defaultTo(false);
        tbl.boolean('Requires_At_Home').defaultTo(false);
        tbl.boolean('Requires_At_Work').defaultTo(false);
        tbl.boolean('Requires_At_Computer').defaultTo(false);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('actions', tbl => {
        tbl.dropColumn('completed')
        tbl.dropColumn('Requires_At_Home')
        tbl.dropColumn('Requires_At_Work')
        tbl.dropColumn('Requires_At_Computer')
    });
  };
