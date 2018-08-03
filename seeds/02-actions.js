
exports.seed = function(knex, Promise) {
  return knex('actions').del()
    .then(function () {
      return knex('actions').insert([
        { 
          description: 'Jam the matter fluxerator into the cheese',
          notes: 'DO NOT FLIP THE SWITCH THAT SAYS FLIP ME',
          project_id: 1,
          completed: true
        },
        { 
          description: 'Flip the switch',
          notes: 'The one that says FLIP ME',
          project_id: 1,
          completed: false
        },
        { 
          description: 'Add Sugar',
          notes: 'Lots of it',
          project_id: 2,
          completed: false
        },
        { 
          description: 'Begin human trials',
          notes: 'Good luck',
          project_id: 2,
          completed: false
        },
        { description: 'Construct Rocket',
          notes: `Let's just get a big cylinder with a cone on top and put a bunch of TNT under it`,
          project_id: 3,
          completed: false
        },
        { 
          description: 'Try not to die',
          notes: 'Self explanatory',
          project_id: 3,
          completed: false
        }
      ]);
    });
};
