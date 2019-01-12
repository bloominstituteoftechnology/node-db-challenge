
exports.up = function(knex, Promise) {
  
};

exports.down = function(knex, Promise) {
    return table.schema.dropTableIfExists("project")
};
