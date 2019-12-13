
exports.up = function(knex) {
  return knex.schema.createTable("projects",tbl=>{
      tbl.increments();

      tbl.string("name",255)
        .notNullable();

      tbl.string("description", 255);

      tbl.boolean("completed")
        .notNullable()
        .defaultTo(false);
  
    }).createTable("resources", tbl=>{
      tbl.increments();
      
      tbl.string("name",255)
        .notNullable();
      
      tbl.string("decription");




  }).createTable("projectDetails",tbl=>{
      tbl.increments();

      tbl.integer("projectID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      
    tbl.integer("resourceID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        
    
  }).createTable("tasks",tbl=>{
      tbl.increments();

      tbl.string("description",255)
        .notNullable();

      tbl.string("notes",255);

      tbl.integer("projectID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl.boolean("completed")
        .notNullable()
        .defaultTo(false);

  })
};

exports.down = function(knex) {
  
};
