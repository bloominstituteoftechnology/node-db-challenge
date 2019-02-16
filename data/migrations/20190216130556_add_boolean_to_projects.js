
exports.up = function(knex, Promise) {
 return knex.schema.table('projects', table => {
  table.boolean('completed').defaultTo(false)
 })
 
};

exports.down = function(knex, Promise) {
 return knex.schema.dropColumn('completed')
};
