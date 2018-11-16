exports.up = function(knex, Promise) {
  return knex.schema.table("actions", tbl => {
    tbl.renameColumn("name", "notes");
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.table("actions", tbl => {
        tbl.renameColumn("notes", "name");
      });
};
