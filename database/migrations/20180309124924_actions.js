exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', act => {
    act.increments();
    act
      .integer('actId')
      .unsigned()
      .references('id')
      .inTable('projects');
    act
      .string('name')
      .notNullable()
      .unique();
    act.string('description');
    act.string('notes');
    act.boolean('completed');
    act.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
