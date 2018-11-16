
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Projects',(table)=>{
        table.increments('Id');
        
        table.integer('IdStatus').isnotNullable();
        table.foreign('IdStatus').references('Status.Id')

        table.string('Name').isnotNullable();
        
        table.string('Description');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Projects');
};
