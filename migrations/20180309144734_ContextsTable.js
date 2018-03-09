exports.up = function(knex, Promise) {
    return knex.schema.createTable('contexts', table => {
        table.integer('id').primary();
        table.string('context').notNullable();

        table
            .integer('projectId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE');
            
        table.timestamp('createdAt').default(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
