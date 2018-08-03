exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();

    tbl.string("description");
    tbl.string("notes");
    tbl.boolean("completed");

    tbl.integer("project_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("projects")
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {};
