
exports.up = function(knex, Promise) {
  return knex.schema.table('projects', table =>{
      table.dropColumn('completed');
  })
};

exports.down = function(knex, Promise) {
 
};
