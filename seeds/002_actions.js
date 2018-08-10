
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, 
          description: 'doing a sprint',
          notes: 'notes1'
        },

        {project_id: 2, 
          description: 'with full conviction',
          notes: 'notes2'
        },

        {project_id: 3, 
          description: 'gives me conniptions',
          notes: 'notes3'
        }
      ]);
    });
};
