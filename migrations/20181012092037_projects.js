
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(t) {
    // primary key ID ++
    t.increments();
    // name of project
    t.string('name', 255)
    .notNullable();
    // project description
    t.string('description', 255)
    .notNullable();
    // completion boolean
    t.boolean('complete')
    .notNullable();
    // timestamp
    t.timestamp('createdAt').defaultTo(knex.fn.now());

})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
