
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function (table){
    table.increments();
    table.string('name').notNullable;
    table.string('description');
    table.boolean('completed').defaultTo(false);
  })
  .createTable('actions', function(table){
    table.increments();
    table.string('description');
    table.string('notes');
    table.boolean('completed').defaultTo(false);
    table.integer('project_id').references('id').inTable('project')
  })
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTable('actions').dropTable('project')
};
