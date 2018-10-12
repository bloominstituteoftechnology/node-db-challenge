exports.up = function (knex, Promise) {
  return knex.schema.createTable("actions", function (tbl) {
    tbl.increments(); // sets primary key that increments automatically which cannot be null

    tbl // set key to string which cannot be null
      .string("description", 256)
      .notNullable()

    tbl // set key to string
      .string("notes", 256)

    tbl // set key to boolean which cannot be null 
      .boolean("completed")
      .notNullable()

    tbl // set key to integer that references column 'id' in table "projects" which cannot be null
      .integer("project_id")
      .notNullable()
      .references('id')
      .inTable("projects")
      .onDelete('CASCADE');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("actions");
};