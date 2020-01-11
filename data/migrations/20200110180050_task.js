
exports.up = async function (knex) {
    await knex.schema.createTable("task", (table) => {
        table.increments("id")
        table.string("description").notNullable()
        table.string("notes")
        table.boolean("completed")
        table.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("project")
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("task")
};
