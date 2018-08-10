
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', action => {
      action.increments();

      action
      .string('description')
      .notNullable()
      .unique()
      
      action
      .boolean('completed').defaultTo(false)

      action
      .text('notes')
      .notNullable()
      .unique()

      action
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
   
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
