
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
    //   tbl.integer().notNullable().unsigned();
      tbl.string('project_name', 255).unique();
      tbl.string('project_description', 255);
      tbl.boolean('project_completed').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
