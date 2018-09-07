
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', function (table) {
    table.increments() // PK 
    table.string('note', 500) //  note
    table.string('description', 500) // description
    table.boolean('flag').defaultTo(false) // flag
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action')
};