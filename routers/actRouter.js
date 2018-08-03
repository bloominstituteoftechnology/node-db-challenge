const express = require('express')
const actionTbl = require('../data/helpers/actionTbl')

const act = express.Router()

act.get('/', async (req,res) => {

  try{
    const data = await actionTbl.get()
    res.status(200).json(data)
  }
  catch(err) {res.status(500).json({err})}
})


act.get('/:id', async (req,res) => {
  const {id} = req.params

  try{
    const data = await actionTbl.get(id)
    res.status(200).json(data)
  }
  catch(err) {res.status(500).json({err})}
})

act.post('/', async (req,res) => {
  const {body} = req

  try{
    const id = await actionTbl.insert(body)
    const data = await actionTbl.get(id[0])
    res.status(200).json(data)
  }
  catch(err) {
    if(err.errno == 19) res.status(500).send('Check to make sure all required fields are being sent')
    res.status(500).json({err:err})
  }

})
module.exports = act