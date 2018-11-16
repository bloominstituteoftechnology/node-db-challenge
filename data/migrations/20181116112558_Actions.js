

exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', (table) => {
          table.increments();
          table.string('description', 255);
          table.string('notes', 255);
          table.boolean('completed').defaultTo(false);
          table
              .integer('project_id')
              .notNullable()
              .references('projects.id')
             // .inTable('projects');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};