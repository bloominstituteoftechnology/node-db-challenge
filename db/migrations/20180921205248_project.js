
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl.string('name',64).notNullable()
    tbl.string('description',1000).notNullable()
    tbl.integer('action_Id').notNullable().unsigned().references('projects.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
