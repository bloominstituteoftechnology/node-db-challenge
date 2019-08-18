exports.up = function(knex, Promise) {
    return knex.schema.createTable("projectsResources", tbl => {
        tbl.decimal("resource_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable ("resources")
        .onDelete ("CASCADE")
     
        tbl.decimal("project_id")
        .notNullable()
    
        .unsigned()
        .references("id")
        .inTable ("projects")
        .onDelete ("CASCADE")
       
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("projectsResources");
};
