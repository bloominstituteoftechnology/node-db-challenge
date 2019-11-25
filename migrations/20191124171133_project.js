

exports.up = function (knex) {
    return knex.schema
        .createTable('project', (tbl) => {
            tbl.increments('id').unique()
            tbl.integer('project_id')
                .unique()
                .notNullable()
            tbl.text('name')
            tbl.integer('description')
            tbl.boolean('completed')
                .notNullable()
            tbl.integer('taskQuantity')



        })
        .createTable('resource', (tbl) => {
            tbl.increments('id')
            tbl.integer('resource_id')
                .unique()
                .notNullable()
            tbl.integer('name')
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
            tbl.text('description')
                .notNullable()



        })
        .createTable('task', (tbl) => {
            tbl.increments('id')
            tbl.integer('task_id')
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