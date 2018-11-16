exports.up = function(knex, Promise) {
  // makes the changes to the database
  return knex.schema.createTable("projects", function(tbl) {
    // make changes to the table using the tbl object passed as a parameter

    // primary key
    tbl.increments(); // generate and id field and make it autoincfement and the primary key

    // other fields
    tbl.string("name", 128).notNullable();
    tbl.string("description", 255);

    tbl.boolean("complete");
  });
};

exports.down = function(knex, Promise) {
  // undo the changes to the database (it's called rolling back changes)
  return knex.schema.dropTableIfExists("projects");
};

/*
A project can contain multiple actions and has:
a unique Id.
a name.
a description.
a flag that indicates if the project is complete or not.
*/
