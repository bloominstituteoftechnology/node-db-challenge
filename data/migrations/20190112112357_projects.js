
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', table => {
        table.increments();
        table.string('project-name').notNullable();
        table.string('project-description');
        table.boolean('project-complete');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExits('projects');
};
