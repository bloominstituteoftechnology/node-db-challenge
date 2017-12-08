
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    tbl.integer('id').notNullable();
    tbl.integer('projectsId').notNullable().references('id').inTable('projects');
    tbl.integer('contextsId').references('id').inTable('contexts');
    tbl.string('description').notNullable();
    tbl.string('notes').notNullable();
    tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('actions');
};
