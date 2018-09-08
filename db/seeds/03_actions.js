
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 2, description: 'Well lets see here',
      notes:'Note that the swizzlebloop is gooping hard.'
      },
        {project_id: 2, description: 'Well lets see here',
      notes:'Note that the swiddleblaap is blorupping smooth.'
      },
        {project_id: 2, description: 'Well lets see here',
      notes:'Note that the swigglebluus is grinning easy.'
      }
      ]);
    });
};
