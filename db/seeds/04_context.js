
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('context').del()
    .then(function () {
      // Inserts seed entries
      return knex('context').insert([
        {context_name: "At computer"},      //1
        {context_name: "With nunchucks"},   //2
        {context_name: "At Home"},          //3
        {context_name: "With courage"},     //4
        {context_name: "At DoJo"},          //5
      ]);
    });
};
