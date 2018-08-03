exports.up = function(knex, Promise) {
  knex.schema.createTable('projects', t => {
    t.increments('id')
    t.string('name')
    t.text('description')
    t.boolean('completed')
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('projects') 
};
