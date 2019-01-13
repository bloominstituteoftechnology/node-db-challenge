exports.up = function (knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments();
    table.string('name').notNullable();
    table.integer('Project_ID').unsigned().references('id').inTable('projects')
    table.text('description');
    table.text('additional_information').notNullable();
    table.boolean('completed');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
 };
