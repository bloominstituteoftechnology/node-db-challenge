
exports.up = function(knex) {
        return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .notNullable()
            tbl.text('description')
                .notNullable()
            tbl.boolean('completed')
                .defaultTo('false')
        })

        .createTable('resources', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .notNullable()
            tbl.text('description')
                
        })

        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text('description')
                .notNullable()
            tbl.text('notes')
            tbl.boolean('completed')
                .notNullable()
                .defaultTo('false')
        })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')

    
};
