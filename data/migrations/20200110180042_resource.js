
exports.up = async function (knex) {
    await knex.schema.createTable("resource", (table) => {
        table.increments("id")
        table.string("name").notNullable()
        table.string("description")
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("resource")
};
