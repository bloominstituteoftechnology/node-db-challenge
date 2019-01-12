
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function (table) {
        table.increments();
        table.string('project_name').notNullable().unique();
        table.string('project_des').notNullable();
        table.boolean('isCompleted');
    });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('project');
};
