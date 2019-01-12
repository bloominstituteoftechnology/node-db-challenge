exports.up = function (knex, Promise) {
  return knex.schema.createTable('action', table => {
    table.increments();
    table.string('Name').notNullable();
    table.integer('Project_ID').unsigned().references('id').inTable('projects')
    table.text('description');
    table.text('additional information');
    table.boolean('Completed');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
