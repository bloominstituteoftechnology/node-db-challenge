
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.integer('portfolio_id')
      .unsigned()
      .references('id')
      .inTable('portfolios');
      tbl.string('project_name', 255).unique();
      tbl.string('project_description', 255);
      
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
