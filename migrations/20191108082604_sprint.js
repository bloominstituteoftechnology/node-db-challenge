
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
      tbl.increments();
      tbl.text('project_name', 128)
        .unique()
        .notNullable();
      tbl.text('description', 500)
      tbl.boolean('')
    })
    .createTable('resource', tbl => {
      tbl.increments();
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('scheme_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('schemes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
};
