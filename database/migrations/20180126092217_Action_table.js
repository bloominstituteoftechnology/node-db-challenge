
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(table) {
    table.integer('id').notNullable();
    table.integer('projectstId').notNullable().references('id').inTable('projects');
    table.integer('contextsId').references('id').inTable('contexts');
    table.string('description').notNullable();
    table.string('notes').notNullable();
    table.boolean('completed').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('actions')  
};
