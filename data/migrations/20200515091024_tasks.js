
exports.up =  function(knex) {
  return knex.schema
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('description', 300)
        .notNullable();
      tbl.text('notes', 128)
      tbl.integer("project_id")
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
      tbl.boolean('completed').defaultTo(false)
      .notNullable();
    })



};

exports.down =  function(knex) {
  return knex.schema
  .dropTableIfExists('tasks');
};
