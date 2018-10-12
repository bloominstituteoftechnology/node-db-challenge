
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'install all dependencies needed', note: 'yarn add react-router-dom, yarn, reactjs-popup', project_id: 1},
        {description: 'gather art supplies', note: 'go to Michaels', project_id: 2},
        {description: 'watch tutorials/use the internet resources', note: 'for tutorials, you can watch https://www.youtube.com/watch?v=llNuwhZWXKA&start_radio=1&list=RDllNuwhZWXKA', project_id: 3}
      ]);
    });
};
