exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', t => {
    t.increments('id')
    t.integer('projectId')
    t.text('description')
    t.text('notes')
    t.boolean('completed')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions') 
};
