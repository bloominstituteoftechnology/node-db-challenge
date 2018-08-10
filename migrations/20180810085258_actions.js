exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', (action) => {
    action.increments();

    action
      .string('description')
      .notNullable()
      .unique();

    action
      .string('notes')
      .notNullable()
      .unique();

    action.boolean('completed').defaultTo(false);

    action
      .integer('projectId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {};
