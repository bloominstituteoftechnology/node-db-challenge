
exports.up =  function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('project_name', 128)
        .unique()
        .notNullable();
      tbl.text('description', 300)
      tbl.boolean('completed').defaultTo(false)
      .notNullable();
    })

};

exports.down =  function(knex) {
  return knex.schema
  .dropTableIfExists('projects');
};
