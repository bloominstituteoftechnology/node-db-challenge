
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments();
    tbl.text('projects', 128)
    .unique()
    .notNullable();
    tbl.text('Description', 255);
    tbl.boolean('project').notNullable().defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project');
};
