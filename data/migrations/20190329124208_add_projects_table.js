// Build action tbl
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', (tableObject) => {
    tableObject.increments() // P-key
    tableObject.string('name', 128).notNullable(); // name
    tableObject.string('description', 255); // descrip
    tableObject.boolean('complete').defaultTo(0); // column
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
