
exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", (tbl) => {
    tbl.increments()
    
    tbl
    .integer("project_id")
    .unsigned()
    .references("id")
    .inTable("projects")

    tbl
    .text("description")
    .notNullable()
    
    tbl.text("notes")

    tbl
    .boolean("complete")  
    .notNullable()  
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions")
};
