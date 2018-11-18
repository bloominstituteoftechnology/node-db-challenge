
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', tbl => {
      tbl
        .increments();
      tbl
        .string('description')  
        .notNullable()
      tbl
        .string('notes')
       tbl
        .boolean('completed')
        .defaultTo(false)
        .notNullable()   
       tbl
        .integer('project_Id')
        .unsigned()
        .references('id')
        .inTable('project') 
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action')
};
