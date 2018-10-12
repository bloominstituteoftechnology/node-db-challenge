exports.up = function (knex, Promise) {
  return knex.schema.createTable("projects", function (tbl) {
    tbl.increments(); // sets primary key that increments automatically which cannot be null

    tbl // sets key to "name" that has to be unique which cannot be null
      .string("name", 256)
      .notNullable()
      .unique("name");

    tbl // set key to string
      .string("description", 256)

    tbl // set key to boolean which cannot be null 
      .boolean("completed")
      .notNullable()
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("projects");
};