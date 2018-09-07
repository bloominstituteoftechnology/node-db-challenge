
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function (table) {
    table.increments() // PK 
    table.string('name', 255).notNullable() // name
    table.string('description', 500) // description
    table.boolean('flag').defaultTo(false) // flag
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
};