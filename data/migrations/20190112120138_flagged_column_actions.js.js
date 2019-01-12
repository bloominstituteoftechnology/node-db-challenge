
exports.up = function(knex, Promise) {
    return knex.schema.table('actions', 
    table => {
        table.boolean('flagged_project');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('actions'),
    table => {
        table.dropColumn('flagged_project');
    }
  };
  