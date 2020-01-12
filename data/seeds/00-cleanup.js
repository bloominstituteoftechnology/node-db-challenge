const knexCleaner = require('knex-cleaner');

// A cleanup seed file will clear all tables. 

exports.seed = function(knex) {
  
  return knexCleaner.clean(knex, {
    mode: 'truncate', 
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
    });
};
