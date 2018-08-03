const express = require('express')
const baseTbl = require('../data/helpers/baseTbl')

const act = express.Router()

act.get('/', async (req,res) => {

  try{
    const data = await baseTbl.get('action')
    res.status(200).json(data)
  }
  catch(err) {res.status(500).json({err})}
})


act.get('/:id', async (req,res) => {
  const {id} = req.params

  try{
    const data = await baseTbl.get(id, 'action')
    res.status(200).json(data)
  }
  catch(err) {res.status(500).json({err})}
})

act.post('/', async (req,res) => {
  const {body} = req

  try{
    const id = await baseTbl.insert(body, 'action')
    const data = await baseTbl.get(id[0])
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
      const isUpdated = await baseTbl.update(id,body, 'action')
      if (isUpdated) {
        const data = await baseTbl.get(id)
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
      const numRowsDel = await baseTbl.delete(id, 'action')

      numRowsDel === 0 ? res.status(500).json({err: 'Make sure the id is correct'}) :
        res.status(200).json({msg:`record with id = ${id} has been deleted`})
    }
    catch(err) {
      if(err.errno == 19) res.status(500).send('Check to make sure all required fields are being sent')
      else res.status(500).json({err:err})
    }
})


module.exports = act