
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments().primary() //primary key
    tbl.string('name', 128).unique().notNullable();
    tbl.text('description', 500);
    tbl.boolean('completed');
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
}
