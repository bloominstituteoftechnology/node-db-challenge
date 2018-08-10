
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id:1,
          name: 'stuff i love',
          description: 'yayayay'
        
      },

        { id:2,
          name: 'things that are ez pz',
          description: 'testsetest'
        
      },

        { id:3,
          name: 'things that are a bit harder',
          description: 'testetswtst'
        
      }

      ]);
    });
};
