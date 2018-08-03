exports.up = knex => knex.schema.createTable('projects', (projects) => {
  projects.increments('id').primary();
  projects.text('name');
  projects.text('description');
  projects.boolean('completed');
});

exports.down = knex => knex.schema.dropTableIfExists('projects');
