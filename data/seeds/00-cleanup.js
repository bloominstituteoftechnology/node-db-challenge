// exports.seed = async function(knex) {
// 	await knex('project-resources').truncate();
// 	await knex('tasks').truncate();
// 	await knex('resources').truncate();
// 	await knex('projects').truncate();
// };

const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
	return cleaner.clean(knex, {
		mode: 'truncate',
		ignoreTables: [ 'knex_migrations', 'knex_migrations_lock' ]
	});
};
