
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function(tbl){
    tbl.increments();
    tbl.string('project_name', 255).nonNullable();
    tbl.string('description', 255);
    tbl.boolean('completed');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
