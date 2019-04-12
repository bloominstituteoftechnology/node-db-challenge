
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'we first start with the frame and the wheels', notes: 'we will need three four-man teams to start', completed: 'false'},
        {description: 'we first start with the foundation and framework', notes: 'we will need three four-man teams to start', completed: 'false'},
        {description: 'we first start with the stern then the bow', notes: 'we will need three four-man teams to start', completed: 'false'}
      ]);
};
