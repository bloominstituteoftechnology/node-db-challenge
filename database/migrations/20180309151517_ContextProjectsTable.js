exports.up = function(knex, Promise) {
  return knex.schema.createTable('contextprojects', table => {
      table.increments('id').primary();
      table.string('context').notNullable();
      table
            .integer('projectId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE');
            
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contextprojects');
};
