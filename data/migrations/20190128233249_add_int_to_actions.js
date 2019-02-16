
exports.up = function(knex, Promise) {
 return knex.schema.table('actions', table => {
  table.integer('project_id')
       .unsigned()
 })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('project_id', table => {
  table.dropColumb
 })
};
