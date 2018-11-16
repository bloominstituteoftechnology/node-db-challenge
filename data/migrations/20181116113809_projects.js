exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", table => {
    table.increments(); //primary key
    table.string("name", 255).notNullable();
    table.string("description", 500);
    table.boolean("completed").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
