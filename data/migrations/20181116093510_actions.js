exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions',function(tbl){
        //primary key (Id)
        tbl.increments();
        //name
        tbl.string('name', 128).unique();
        //description
        tbl.string('description',255);
        //Notes
        tbl.string('notes').nullable()
        //completed bool
        tbl.boolean('is_completed');
        //Project key / foriegn key
        tbl.integer('project_id').unsigned().references('id').inTable('projects');
        tbl.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};