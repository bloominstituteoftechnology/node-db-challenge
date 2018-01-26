
exports.up = function(knex, Promise) {
 return knex.schema.createTable('context', function(tbl) {
   tbl
     .increments('id')
     .string('context')
     .notNullable();
 }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('context');  
};
