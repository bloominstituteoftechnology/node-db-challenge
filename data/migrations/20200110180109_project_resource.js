
exports.up = async function (knex) {
    await knex.schema.createTable("project_resource", (table) => {
        table.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("project")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table.integer("resource_id")
            .notNullable()
            .references("id")
            .inTable("project")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

            table.primary([ "project_id", "resource_id"])
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("project_resource")
};
