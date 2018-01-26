
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Projects', function(tb) {
    tb
        .primary()
        .increments('id');
    tb
        .string('name', 255)
        .notNullable()
        .unique('name', 'uq_project_name');
    tb
        .string('description')
        .notNullable();
    tb
        .boolean('completed')
        .notNullable()
        .defaultTo(false)
  }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Projects')
};
