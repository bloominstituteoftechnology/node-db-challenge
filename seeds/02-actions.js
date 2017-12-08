// t.increments('id');
// t.text('description').notNullable();
// t.text('notes');
// t.boolean('actionCompleteFlag');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          description: 'ACTION 1 DESCRIPTION!!!',
          notes: 'omg this is action 1!',
          actionCompleteFlag: true
        },
        {
          id: 2,
          description: 'hello its me ACTION 2!!',
          notes: 'i love second actions!',
          actionCompleteFlag: true
        },
        {
          id: 3,
          description: '((insert third action here))',
          notes: 'this action is not done!',
          actionCompleteFlag: false
        }
      ]);
    });
};
