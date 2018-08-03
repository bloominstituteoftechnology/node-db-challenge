
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable();
    tbl.text('description');
    tbl.boolean('complete').defaultTo(false);
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
