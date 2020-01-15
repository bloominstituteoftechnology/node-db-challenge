
exports.seed = async (knex) => {
 await knex('project').insert([
        { id: 1, name: 'Dust', description: "Use Swiffer Dusters" },
        { id: 2, name: 'Vacuum', description: "Use a Shark or a Dyson Vacuum" },
        { id: 3, name: 'Mop', description: "Use a Libman Cloth Mop" },
      ])
}
