
exports.up = function(knex) {
    return(
        knex.schema
        .createTable("project", tbl=>{
            tbl.increments();
            tbl.string("project_name", 255).notNullable();
            tbl.string("project_description", 255);
            tbl.boolean("completed").notNullable()
            .defaultTo(false)
        })
        .createTable( "resource", tbl=>{
            tbl.increments()
            tbl.integer('resource_id')
            .unsigned()
            .reference("project.id")
            .inTable("project")
            .notNullable()
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
            tbl.string(resource_name, 128)
            .notNullable()
            tbl.string(description, 255)
            .notNullable()
        })
        .createTable("task", tbl=>{
            tbl.increments()
            tbl.integer("task_id")
                .unsigned()
                .notNullable()
                .references("project.id")
                .inTable("project")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
            tbl.string("description", 255)
                .notNullable()
            tbl.string("notes")
            tbl.boolean("completed")
                .notNullable()
                .defaultTo(false)

        })

    )
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("task")
        .dropTableIfExists("resource")
        .dropTableIfExists("project")
  
};
