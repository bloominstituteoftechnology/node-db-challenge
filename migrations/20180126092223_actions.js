
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
     tbl
       .increments('id')
       .string('description')
       .notNullable()
       .string('notes')
       .notNullable()
       .boolean('completed')
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
