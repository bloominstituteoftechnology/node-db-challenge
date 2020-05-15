
exports.up =  function(knex) {
  return knex.schema
    .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.integer("project_id")
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
      tbl.integer("resource_id")
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
    })



};

exports.down =  function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources');
};
