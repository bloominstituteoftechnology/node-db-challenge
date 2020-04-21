
exports.seed = async function(knex) {

      await knex('project').insert([
        {
          project_name:'Finish Node Db4 recepie project', 
          description: 'Design and build a Data Model and a RESTful API',
          completed:false
        },
        {
          project_name:'Clean House', 
          description: 'Complete weekly house cleaning',
          completed:false
        }
    
      ])
    
};
