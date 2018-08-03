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

act.put('/:id', async (req,res) => {
  const {id} = req.params
  const {body} = req

  if (Object.keys(body).length === 0) res.status(500).json({msg:'request body is required for a PUT'})
  else {
    try{
      const isUpdated = await actionTbl.update(id,body)
      if (isUpdated) {
        const data = await actionTbl.get(id)
        res.status(200).json({msg:'record updated', payload: data})
      }else res.status(500).json({err: 'Make sure the id is correct'})
    }
    catch(err) {
      if(err.errno == 19) res.status(500).send('Check to make sure all required fields are being sent')
      else res.status(500).json({err:err})
    }
  }
})

act.delete('/:id', async (req,res) => {
  const {id} = req.params

    try{
      const numRowsDel = await actionTbl.delete(id)
      
      numRowsDel === 0 ? res.status(500).json({err: 'Make sure the id is correct'}) :
        res.status(200).json({msg:`record with id = ${id} has been deleted`})
    }
    catch(err) {
      if(err.errno == 19) res.status(500).send('Check to make sure all required fields are being sent')
      else res.status(500).json({err:err})
    }
})


module.exports = act