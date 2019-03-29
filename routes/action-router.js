const router = express.Router()
const db = require('../data/dbConfig')

router.get('/', async (req, res)=> {
    try {
        const projects = await db('project');
        res.status(200).json({projects, message: 'Success'})
    }
    catch(error){
        res.status(500).json({message: 'Error retrieving projects', error})
    }
})

router.post('/', async (req, res)=> {
    try {
        const project = await db('project').insert(req.body);
        res.status(200).json({project, message: "Success"})
    }
    catch(error){
        res.status(500).json({message: 'Error posting project', error})
    }
})