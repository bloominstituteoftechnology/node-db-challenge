exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments("action_id");

    tbl.string("description").notNullable();

    tbl.string("notes").notNullable();

    tbl.boolean("action_completed").defaultTo(false);

    tbl.timestamp("action_added").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
