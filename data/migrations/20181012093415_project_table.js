// Build the Project Table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', (tableObject) => {
    // Primary Keys
    tableObject.increments()
    
    // Name Column
    tableObject.string('name', 128).notNullable();

    // Description Column
    tableObject.string('description', 255);

    // Complete Column
    tableObject.boolean('complete').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
