
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Projects_Actions_XREF',(table)=>{
     
        table.increments("Id");

        table.integer('IdProject').notNullable();
        table.foreign('IdProject').references('Projects.Id')

        table.integer('IdAction').notNullable();
        table.foreign('IdAction').references('Actions.Id')
        
        table.timestamps(true,true);

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Projects_Actions_XREF')
};
