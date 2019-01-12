exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function (table) {
        table.increments();
        table.string('actions_des').notNullable();
        table.string('action_notes', 500);
        table.boolean('isCompleted').defaultTo(0);
        table.integer('project_id').unsigned();
        table.foreign('project_id').references('id').on('projects');
    });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('actions');
};


