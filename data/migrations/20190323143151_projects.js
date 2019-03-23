
exports.up = function(knex, Promise) {
    // LOGIC TO DEFINE OUR PROJECTS TABLE
    return knex.schema.createTable("projects", table => { //takes in table name and callback function 
        table.increments();
        table.string("name", 128) // will work even if dev database and production datbase are different
            .notNullable()
            .unique();
}) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("projects")
};
