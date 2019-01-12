
exports.up = function(knex, Promise) {
  return knex.schema.createTable('PandAJoinTable', tbl => {
      tbl.increments();
      tbl.integer('action_id').unsigned().references('id').inTable('action');
      tbl.integer('project_id').unsigned().references('id').inTable('project');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('PandAJoinTable');
};
