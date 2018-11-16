
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', tbl => {
      tbl
        .increments();
      tbl
        .string('name', 256)
        .notNullable()  
      tbl
        .string('description')
        .notNullable()
      tbl
        .boolean('completed')
        .notNullable()    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
};
