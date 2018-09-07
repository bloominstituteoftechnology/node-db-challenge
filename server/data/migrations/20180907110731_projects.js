exports.up = (knex, Promise) => {
  return knex.schema.createTable('projects', t => {
    t.increments();
    t.string('name').notNullable();
    t.string('description');
    t.boolean('completed');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('projects');
};
