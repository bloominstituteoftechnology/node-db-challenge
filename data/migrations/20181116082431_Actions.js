
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Actions',(table)=>{
        table.increments("Id");

        table.string("Description").notNullable();

        table.string("Notes");

        table.timestamps(true,true);

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Actions');
};
