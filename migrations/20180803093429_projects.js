
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project').notNullable().unique()
      tbl.string('description')
      tbl.string('completed')
  })
};

exports.down = function(knex, Promise) {
  
};
