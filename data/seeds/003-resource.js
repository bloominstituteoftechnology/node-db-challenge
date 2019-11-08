
exports.seed = function(knex) {
 
      return knex('resource').insert([
        {name: 'all purpose', description: 'use to clean table'},
        {name: 'windex', description: 'use to clean glass'},
        {name: 'trash bag', description: 'put all the trash into'}
      ]);
   
};
