
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();
    tbl
      .string('description')
      .notNullable();
    tbl.string('notes');
    tbl
      .integer('project_id')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.boolean('completed');
  })
};

exports.down = function(knex, Promise) {
  
};
