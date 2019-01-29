
exports.up = function(knex, Promise) {
 return knex.schema.table('actions', table => {
  table.foreign('project_id')
       .references('id')
       .on('projects')
 })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropColumn('project_id')
};
