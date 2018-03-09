
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Actions').insert([
        {description: 'Wash Dishes', notes: 'Remember to find the dishes left in childs room'},
        {description: 'Get Window Cleaner', notes: 'Local grocer is overpriced'},
        {description: 'Shred Files Older Than 5 Years', notes: 'Except Active Accounts'},
      ]);
    });
};
