
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', (table) => {
          table.increments();
          table.string('name', 255).notNullable();
          table.string('description', 255);
          table.boolean('completed').defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
