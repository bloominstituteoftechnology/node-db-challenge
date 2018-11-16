exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects',function(tbl){
        //primary key (Id)
        tbl.increments();
        //name
        tbl.string('name', 128).unique();
        //description
        tbl.string('description',255)
        tbl.boolean('is_completed')
        tbl.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};

