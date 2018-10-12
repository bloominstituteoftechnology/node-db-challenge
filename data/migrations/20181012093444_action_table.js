// Build the Action Table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', (tableObject) => {
    // Primary Keys
    tableObject.increments();

    // Project Table Foreign Key
    tableObject.integer('project_id')
    .unsigned()
    .references('id')
    .inTable('project');

    // Name Column
    tableObject.string('description', 255).notNullable();

    // Description Column
    tableObject.string('notes', 255);

    // Complete Column
    tableObject.boolean('complete').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('action');
};
