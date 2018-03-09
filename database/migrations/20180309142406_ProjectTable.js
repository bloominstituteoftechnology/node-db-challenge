
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', table => {
        table.increments('id').primary();
        table.string(name).notNullable();
        table.string('description', 255).notNullable();
        table.boolean('isComplete').default(false);
        table.timestamp('createdAt').default(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
