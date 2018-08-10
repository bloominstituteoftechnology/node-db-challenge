
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl){
    
    tbl.increments().unique();

    tbl.string('description')
    tbl.string('notes')
    tbl.boolean('completed').notNullable().defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  
};
