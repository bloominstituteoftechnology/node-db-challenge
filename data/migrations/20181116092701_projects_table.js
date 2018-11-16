
exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl =>{
    tbl.increments();
    tbl
        .string('name', 127)
        .notNullable();
    tbl
        .string('description', 255);
    tbl.boolean('completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
