exports.seed = function(knex, Promise) {
    return knex('actions').del()
      .then(function () {
        return knex('actions').insert([
          {
            project_id: 1,
            description: 'bed',
            notes:
              'wash sheets, blanket and pillowcases',
          },
          {
            project_id: 1,
            description: 'vacuum',
            notes: 'every single room',
          },
          {
            project_id: 1,
            description: 'do the dishes',
            notes: 'wash, dry and put away',
          },
        ]);
      });
  };