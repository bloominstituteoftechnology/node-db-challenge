exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', t => {
    t.increments('id')
    
    t
      .integer('projectId')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    t.text('description').notNullable()
    t.text('notes').nullable()
    t.boolean('completed').notNullable().defaultTo(false)
    t.timestamp('createdAt').notNullable().defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions') 
};
