
exports.seed = function (knex) {
  return knex('projects').insert([
    {
      project_name: 'Expat Journal',
      project_description: "As an expat, I want to be able to show off the places I've been and remember them for myself. I have a lot of amazing pics and stories from around the world I'd like to share, but I need a site that is more personal than Instagram in order to do so.",
      completed: false,
    },
    {
      project_name: 'Refugee Stories',
      project_description: 'People visiting the site will gain a better understanding of the refugee crisis and what it means to be a refugee. There are more people displaced in the world today than at any time since the end of World War II and it is more important than ever to help people develop empathy for each other.',
      completed: true,
    },
    {
      project_name: 'Chef portfolio',
      project_description: "As a food blogger, I want to be able to show off my work and recipes. I have a lot of amazing pics from the recipes i’ve created I'd like to share with potential clients, but I need a site that is more professional than Instagram in order to do so. I don’t have time or skills to build my own unique website, I need a site that provides templates so I can just input some information and be done.",
      completed: false,
    },
  ]);
};
