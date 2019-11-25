

exports.up = function (knex) {
    return knex.schema
        .createTable('project', (tbl) => {
            tbl.increments('id').unique()
            tbl.integar('project_id')
                .unique()
                .notNullable()
            tbl.text('name')
            tbl.integar('description')
            tbl.boolean('completed')
                .notNullable()
            tbl.integar('taskQuantity')




        })
        .createTable('resource', (tbl) => {
            tbl.increments('id')
            tbl.integar('resource_id')
                .unique()
                .notNullable()
            tbl.integar('name')
            tbl.integar('project_id')
                .unsigned()
                .notNullable()
            tbl.text('description')
                .notNullable()


        })
        .createTable('task', (tbl) => {
            tbl.increments('id')
            tbl.integar('task_id')
                .unique()
                .notNullable()
            tbl.text('description')
            tbl.text('notes')
            tbl.boolean('completed')
                .notNullable()



        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipe')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('task');

};