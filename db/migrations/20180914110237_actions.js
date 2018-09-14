
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(t){
    t.increments();
    t
    .string('action_description')
    .notNullable();
    t
    .string('notes')
    .notNullable();
    t
    .boolean('status')
    .default(false)
    //foreign key
    t
    .integer('project_id')
    .notNullable()
    .references('id')
    .inTable('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions')
};
