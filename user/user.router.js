const express = require('express')
const path = require('path')
const router = express.Router()

router.use(express.json())

const md = require('../utils/async_middleware')
const User = require('./user.model')

//get user profile by id
router.get('/timeline/:id', md(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) throw new Error('no user found with id of' + req.params.id)
    res.status(200).json(user)
}));

router.get('/newsfeed/:id', md(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) throw new Error('no user found with id of' + req.params.id)
    res.status(200).json(user)
}));

router.get('/event/:id', md(async (req, res) => {
    const user = await User.findById(req.params.id)
    // if (!user) throw new Error('no user found with id of' + req.params.id)
    res.status(200).json(user)
}));



module.exports = router
