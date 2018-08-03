exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', t => {
    t.increments('id')
    t.string('name')
    t.text('description')
    t.boolean('completed')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects') 
};
