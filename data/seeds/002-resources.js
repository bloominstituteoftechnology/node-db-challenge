
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1,name: 'computer', description:'Latest model.'},
        {id: 2, name: 'passport', description:'Might need to travel.'},
        {id: 3, name: 'car', description: 'Vroom vroom.'},
        {id: 4, name: 'cellphone', description: 'apple or something else?.'},
        {id: 5, name: 'keyboard', description: 'Gonna need a few lol'},
        {id: 6, name: 'backpack', description: 'for light travels.'}
      ]);
    });
};
