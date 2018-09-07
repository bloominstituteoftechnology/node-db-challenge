exports.up = (knex, Promise) => {
  return knex.schema.createTable('actions', t => {
    t.increments();
    t.string('description').notNullable();
    t.string('notes');
    t.boolean('completed');
    t.integer('project_id').references('projects.id').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('actions');
};
