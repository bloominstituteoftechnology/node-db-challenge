
exports.up = function(knex, Promie) {
  return knex.schema.createTable('projects', function(table) {
    table
      .increments('id')
      .primary()

    table
      .text('name', 128)
      .notNullable();

    table
      .text('description', 256);

    table
      .boolean('completed')
  }).then(function() {
    return knex.schema.createTable('actions', function(table) {
      table
      .increments('id')
      .primary()

      table
        .text('description', 256);

      table
        .text('notes', 512);

      table
        .boolean('completed') 
        .notNullable()

      table
        .integer('project_id')
        .unsigned()

      table
        .foreign('project_id')
        .references('id')
        .inTable('projects')
    })
  })
};

exports.down = function(knex, Promise) {
  knex.dropTableIfExists('projects')
  knex.dropTableIfExists('actions')
};
