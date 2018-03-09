
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_id: 1, description: 'Drawings on card outline', notes: 'Plan layout, sketch with pencil'},
        {action_id: 2, description: 'Calligraphy for title, main text', notes: 'Lining with pencil and then use india ink'},
        {action_id: 3, description: 'Color & finishing details', notes: 'Bold usage of color, fleshed out drawings'},
        {action_id: 4, description: 'Front-end', notes: 'React, Redux, JSX, CSS'},
        {action_id: 5, description: 'Back-end', notes: 'MySQL, RDBMS, MongoDB, Node, Express, Auth'},
        {action_id: 6, description: 'Bug-fixing', notes: 'Mocha, Chai, Sinon'},
        {action_id: 7, description: 'Testing & Deployment', notes: 'DevOps - Heroku, Ngrok'},
        {action_id: 8, description: 'Glue pieces together', notes: 'Cut excess molding if not cut from scratch, clamp pieces after adhesive'},
        {action_id: 9, description: 'Sand and paint', notes: 'Sand excess adhesive, prime and paint, multiple coats and detailing as needed'}
      ]);
    });
};
