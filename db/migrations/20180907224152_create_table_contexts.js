
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`contexts`, table => {
      table.increments(`id`).primary()
      table.string(`name`, 120)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTrable(`contexts`)
};
