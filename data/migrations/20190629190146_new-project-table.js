
exports.up = async function(knex, Promise) {
 return knex.schema.createTable('projects', table => {
  table.increments()
  table.string("name")
       .notNullable()
  table.string("description")
       .notNullable()
  table.boolean("completed")
       .defaultTo(false)

 })
};

exports.down = async function(knex, Promise) {
 return knex.schema.dropTableIfExists('projects')
};