exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(t) {
    t.increments('id').primary('id');
    t.integer('project_id').unsigned();
    t.foreign('project_id').references('projects.id');
    t.string('name').notNullable();
    t.string('description').notNullable();
    t.string('notes').notNullable();
    t.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {};
