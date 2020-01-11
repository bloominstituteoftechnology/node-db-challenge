
exports.up = async function(knex) {
    await knex.schema.createTable("project", (table) => {
        table.increments("id")
        table.string("name").notNullable()
        table.string("description")
        table.boolean("completed")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project")
};
