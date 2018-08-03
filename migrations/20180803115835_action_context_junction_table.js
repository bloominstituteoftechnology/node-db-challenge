exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions_contexts", tbl => {
    tbl.increments();
    tbl
      .integer("actions_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("actions")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("contexts_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("contexts")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions_contexts");
};
