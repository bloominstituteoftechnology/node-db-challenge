
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project_actions', (tbl) => {
      tbl.increments()

      tbl
      .int("project_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects");

      tbl
      .int("action_project_id")
      .notNullable()
      .unsigned()
      .references("project_id")
      .inTable("actions");
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExsists('project_actions')
};
