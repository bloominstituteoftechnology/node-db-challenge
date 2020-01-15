
exports.seed = async (knex) => {
  await knex('task').insert([
    { id: 1, description: 'Dust all hard surfaces and window blinds', notes: "Dust inside vacuum afterwards with dirty duster.", completed: false, project_id: 1 },
    { id: 2, description: 'Vacuum all floors and stairs', notes: "Empty canister when finished and dust with dirty duster.", completed: false, project_id: 2 },
    { id: 3, description: 'Mop all hard floors', notes: "Use 1 gallon of hot water to 1 cup of distilled white vinegar", completed: false, project_id: 3 }
      ])
}
