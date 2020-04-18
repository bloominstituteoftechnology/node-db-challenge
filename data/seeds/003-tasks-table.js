
exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      task_name: 'MVP',
      notes: 'User can visit site and see photos laid out in a grid',
      completed: true,

    },
    {
      task_name: 'STRETCH',
      notes: 'Build an image uploader into the site to allow users the ability to upload their own assets. (This will require some work with a package called Drop Zone and a service called cloudinary).',
      completed: false,
    },
    {
      task_name: 'MVP',
      notes: 'Home Page - Contains a carousel of 3 sets of pictures and highlighted quotes from recently posted stories with a read more button, linked to full story.',
      completed: true,
    },
    {
      task_name: 'STRETCH',
      notes: 'Create a connect page that shows a google map to show the nearest refugee organizations near you to volunteer with.',
      completed: false,
    },
    {
      task_name: 'MVP',
      notes: 'This app contains two user types. A professional chef (who has the ability to log in) and a single user (no need to log in so no need for user data to be persisted on this user type) who can view portfolios.',
      completed: true,
    },
    {
      task_name: 'STRETCH',
      notes: 'Build a video uploader into the site to allow the chef to demo their recipes.',
      completed: true,
    },
  ]);
};
