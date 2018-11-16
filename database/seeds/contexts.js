  
  
//== Seed Contexts Table =======================================================

//-- Dependencies --------------------------------
const config = require('../../config.js');

//-- Seeding -------------------------------------
exports.seed = function(knex, Promise) {
    return Promise.all([
        knex(config.TABLE_CONTEXTS).del().then(() => {
            return knex(config.TABLE_CONTEXTS).insert([
                {[config.FIELD_NAME]: "At Home"},
                {[config.FIELD_NAME]: "At Work"},
                {[config.FIELD_NAME]: "At Computer"},
                {[config.FIELD_NAME]: "Online"},
            ]);
        }),
        knex(config.TABLE_ACTION_CONTEXTS).del().then(() => {
            return knex(config.TABLE_ACTION_CONTEXTS).insert([
                {[config.FIELD_ACTION_ID]: 1, [config.FIELD_CONTEXT_ID]: 2},
                {[config.FIELD_ACTION_ID]: 1, [config.FIELD_CONTEXT_ID]: 3},
                {[config.FIELD_ACTION_ID]: 2, [config.FIELD_CONTEXT_ID]: 2},
                {[config.FIELD_ACTION_ID]: 2, [config.FIELD_CONTEXT_ID]: 3},
                {[config.FIELD_ACTION_ID]: 3, [config.FIELD_CONTEXT_ID]: 2},
                {[config.FIELD_ACTION_ID]: 3, [config.FIELD_CONTEXT_ID]: 3},
                {[config.FIELD_ACTION_ID]: 3, [config.FIELD_CONTEXT_ID]: 4},
            ]);
        }),
    ]);
};
