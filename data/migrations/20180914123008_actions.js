
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();
  
        tbl 
        .string('name', 300).notNullable();
   });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions');
};
