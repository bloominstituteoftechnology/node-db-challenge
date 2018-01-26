exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (t) => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.string('description').notNull();
    t.boolean('completed').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');  
};
