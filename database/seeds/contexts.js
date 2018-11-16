  
  
//== Seed Contexts Table =======================================================

//-- Dependencies --------------------------------
const config = require('../../config.js');

//-- Seeding -------------------------------------
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex(config.TABLE_CONTEXTS).del()
    // Inserts seed entries
    .then(function () {
        return knex(config.TABLE_CONTEXTS).insert([
            {[config.FIELD_NAME]: "At Home"},
            {[config.FIELD_NAME]: "At Work"},
            {[config.FIELD_NAME]: "At Computer"},
            {[config.FIELD_NAME]: "Online"},
        ]);
    });
};
