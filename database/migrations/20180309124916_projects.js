exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', pjt => {
    pjt.increments();
    pjt
      .string('name')
      .notNullable()
      .unique();
    pjt
      .string('description')
      .notNullable()
      .unique();
    pjt.boolean('completed');
    pjt.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
