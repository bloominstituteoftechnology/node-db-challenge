exports.up = function(knex, Promise) {
  return knex.schema.createTable('contextactions', table => {
      table.increments('id').primary();
      table.string('context').notNullable();
      table
            .integer('actionId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('actions')
            .onDelete('CASCADE');
            
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contextactions');
};
