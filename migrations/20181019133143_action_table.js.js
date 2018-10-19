// build action tbl
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', (tableObject) => {
    tableObject.increments(); // P-keys
    tableObject.integer('project_id') // F-key
    .unsigned()
    .references('id')
    .inTable('project');
    tableObject.string('description', 255).notNullable(); // name
    tableObject.string('notes', 255); //descrip
    tableObject.boolean('complete').defaultTo(0); // complete boolean
  })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('action');
};
