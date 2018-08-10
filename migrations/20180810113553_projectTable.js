
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments();
    
    
    tbl.string('name').unique()
    tbl.string('description')
    tbl.string('notes')
    tbl.boolean('completed').notNullable().defaultTo(false);

  });
};

exports.down = function(knex, Promise) {
  
};
