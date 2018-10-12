
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.string('description', 255).notNullable();
      tbl.boolean('completed').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.DropTableIfExists('project');
};
