
exports.up = function(knex, Promise) {
    return knex.schema.createTable("contexts", (tbl) => {
        tbl.increments()
        
        tbl
        .text("description")
        .notNullable()
      })
    };
    
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("contexts")
};
