exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(t) {
    t.increments();
    t.string("name")
      .notNullable()
      .unique("project_name");
    t.string("description");
    t.boolean("completed");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
