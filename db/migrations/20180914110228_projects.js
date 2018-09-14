
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(t){
    t.increments();
    t
    .string('name')
    .notNullable();
    t
    .string('description')
    .notNullable();
    t
    .boolean('status')
    .default(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
