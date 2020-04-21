exports.up = function (knex) {
    return knex.schema
        .createTable('project', tbl => {
        
            tbl.increments()
            tbl
                .string('project_name', 128)
                .notNullable()
            tbl
                .string('description', 255)
                .notNullable()

            tbl
                .boolean('completed')
                .notNullable()
                .defaultTo(false)

        })

        .createTable('resource', tbl => {
            //PK
            tbl.increments()

            //FK
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            tbl
                .string('resource_name', 128)
                .notNullable()
            tbl
                .string('description', 255)
                .notNullable()
        })

        .createTable('task', tbl => {
            tbl.increments()
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            tbl
                .string('description', 255)
                .notNullable()

            
            tbl
                .string('notes')

            tbl
                .boolean('completed')
                .notNullable()
                .defaultTo(false)
                

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};