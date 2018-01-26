exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', (t) => {
    t.increments('id').unsigned().primary();
    t.string('description').notNull();
    t.string('notes').notNull();
    t.boolean('completed').notNull();
    t.integer('projectId').references('id').inTable('projects');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');  
};
