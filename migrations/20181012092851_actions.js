exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(t) {
    // primary key id
    t.increments()
    // action name
    t.string("name", 255).notNullable()
    // action notes
    t.string("notes", 255).notNullable()
    // complete boolean
    t.boolean("complete").notNullable()
    // timestamp
    t.timestamp("createdAt").defaultTo(knex.fn.now())
    // project ID
    t.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions")
}
