const cleaner = require('knex-cleaner');

exports.seed = async function(knex) {
  try {
    await knex.truncate('resources');
    await knex.truncate('tasks');
    await knex.truncate('projects');
  } catch (err) {
    console.log(err);
  }
};
