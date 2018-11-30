
exports.up = function(knex, Promise) {
  return knex.schema.createTable('portfolios', tbl => {
      tbl.increments();
      tbl.string('portfolio_name', 255).unique();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('portfolios');
};
