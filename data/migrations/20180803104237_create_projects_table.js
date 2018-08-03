exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', t => {
    t.increments('id')
    t.string('name').notNullable()
    t.text('description').notNullable()
    t.boolean('completed').notNullable().defaultTo(false)
    t.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects') 
};
