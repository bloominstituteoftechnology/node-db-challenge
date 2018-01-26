exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
      tbl.increments('id');
      tbl.string('actions', 32).notNullable().unique('uq_actions');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
  };
  