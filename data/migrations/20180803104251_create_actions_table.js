exports.up = function(knex, Promise) {
  knex.schema.createTable('actions', t => {
    t.increments('id')
    t.integer('projectId')
    t.text('description')
    t.text('notes')
    t.boolean('completed')
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('actions') 
};
