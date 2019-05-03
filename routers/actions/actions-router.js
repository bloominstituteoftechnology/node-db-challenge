const express = require('express')

const Actions = require('./actions-model')

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const actions = await Actions.addAction(req.body)
        res.status(200).json(actions)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't add that action."
        })
    }
})

module.exports = router