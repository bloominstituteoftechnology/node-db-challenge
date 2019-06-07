const db = require('./dbConfig');

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  getStudents
};

function find(id = 0, dbn='cohorts') {
  
  if(id && id > 0) 
    return db(dbn)
    .where({ id })
    .first();

  return db(dbn);
}

function findById(id) {return find(id)}

async function add(zoo,dbn='cohorts') {
  const [id] = await db(dbn).insert(zoo);

  return find(id);
}

function remove(id,dbn='cohorts') {
  return db(dbn)
    .where({ id })
    .del();
}

async function update(id, changes, dbn='cohorts') {
  let i = await db(dbn)
    .where({ id })
    .update(changes, '*');
  return find(i);
}

function getStudents(cohortId)
{
  return db('students')
  .join('cohorts', 'cohorts.id', 'cohort_id')
  .select('students.name', 'students.createdAt', 'cohorts.name as cohort')
  .where('cohort_id', cohortId);
}