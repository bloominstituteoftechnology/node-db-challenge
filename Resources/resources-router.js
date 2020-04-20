const express = require("express");
const router = express.Router({
  mergeParams: true
});

const Resources = require("./resources-model");

router.get("/", (req, res) => {
  Resources.getResources().then(resources => {
    res.json(resources);
  });
});

router.get("/id", (req, res) => {
  Resources.getResources(req.params.id).then(resources => {
    res.json(resources);
  });
});

router.post("/", (req, res) => {
    Resources.insert(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
})

module.exports = router;