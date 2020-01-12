exports.up = function(knex) {
    // represents the change we want to make to our schema
    return (
        knex.schema.createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name', 128).notNullable();
            tbl.string('resource_description', 128);
        })
    )
  };
  
  exports.down = function(knex) {
       // represents undoing that change
    return(
        knex.schema.dropTableIfExists('resources')
    );
  };

