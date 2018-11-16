
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Projects',(table)=>{
        table.increments('Id');
        
        table.integer('IdStatus').notNullable();
        table.foreign('IdStatus').references('Status.Id')

        table.string('Name').notNullable();
        
        table.string('Description');

        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Projects');
};
