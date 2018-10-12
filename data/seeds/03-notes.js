
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {note: 'yarn add react-router-dom, yarn, reactjs-popup'},
        {note: 'go to Michaels'},
        {note: 'make sure to purchase: assortment of paint colors, and brushes'},
        {note: 'for tutorials, you can watch https://www.youtube.com/watch?v=llNuwhZWXKA&start_radio=1&list=RDllNuwhZWXKA'}
      ]);
    });
};
