// const knex = require('knex');
// const mappers = required('./mappers');

// const knexConfig = require('../knexfile.js');
// const db = knex(knexConfig.development);

// module.exports = {
//   getActions,
// };

// function getActions(projectId) {
//   return db('actions')
//     .where('project_id', projectId)
//     .then(actions => actions.map(action => mappers.actionToBody(action)));
// };


// // function getRecipes() {
// //   return db('recipes');
// // }

// // function getDish(id) {
// //   return db('dishes')
// //     .where({ id })
// //     .first();
// // }

// // function addDish(dish) {
// //   return db('dishes')
// //     .insert(dish)
// //     .into('dishes');
// // }

// // function addRecipe(recipe) {
// //   return db('recipes')
// //     .insert(recipe)
// //     .into('recipes');
// // }