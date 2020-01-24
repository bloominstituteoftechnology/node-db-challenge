
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.text('project_name')
                .notNullable()
        tbl.text('description')
        tbl.boolean('completed_project')
                .notNullable()
                .defaultTo('False')
    })

    .createTable("resource", tbl => {
        tbl.increments();
        tbl.text('resource_name')
                .notNullable()
        tbl.text('description')
    })

    .createTable("task", tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); 

        tbl.text('description')
                .notNullable()
        tbl.text('notes')
        tbl.boolean('completed_task')
                .notNullable()
                .defaultTo('False')
    })

    .createTable("projectsDetails", tbl => {
        tbl.increments();
        tbl.integer("projects_id")
                    .unsigned()
                    .notNullable()
                    .references("id")
                    .inTable("projects")
                    .onDelete("RESTRICT") // what happens if the publisher with this id is deleted
                    .onUpdate("CASCADE"); // what happens if the publisher id changes
    
        tbl.integer("resource_id")
                    .unsigned()
                    .notNullable()
                    .references("id")
                    .inTable("resource")
                    .onDelete("RESTRICT") // what happens if the publisher with this id is deleted
                    .onUpdate("CASCADE"); // what happens if the publisher id changes
        tbl.integer("quantity")
    })
};

exports.down = function(knex) {
    return knex.schema 
    .dropTableIfExists("projectsDetails") 
    .dropTableIfExists("task") 
    .dropTableIfExists("resource")
    .dropTableIfExists("projects")
};
