
exports.seed = async (knex) => {
  await knex('resource').insert([
    {id: 1, name: 'Swiffer Dusters', description: "Works well for hard to reach places and fine dust." },
    { id: 2, name: 'Shark or Dyson Vacuum', description: "Picks up better than most vacuums, doesn't lose suction and can use on all floor surfaces." },
    { id: 3, name: 'Libman Cloth Mop', description: "Picks up debris, dust, and crusted food without leaving streaks." }
      ])
}
