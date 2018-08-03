exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(t) {
    t.increments('id').primary('id');
    t.string('name').notNullable();
    t.string('description').notNullable();
    t.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {};
