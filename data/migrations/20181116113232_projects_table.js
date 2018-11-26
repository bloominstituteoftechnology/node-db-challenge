exports.up = function(knex, Promise) {
    //unique id, name, description, flag completed
    return knex.schema.createTable('projects', function(table) {
        table.increments();
        table.string('project_name', 128).notNullable().unique('project_name');
        table.string('project_description').notNullable();
        table.boolean('project_completed').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
