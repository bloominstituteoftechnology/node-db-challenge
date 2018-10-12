
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Actions', tbl => {
        tbl.increments();

        tbl.string('Description', 128).notNullable()
        tbl.string('Notes', 128).notNullable()
        tbl.boolean("completed").defaultTo(false);
        


        tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("Projects");


    })



  
};

exports.down = function(knex, Promise) {
  
};
