const fs = require('fs')
const Promise = require('bluebird')
const express = require('express')
const path = require('path')
const router = express.Router()
const read_file = Promise.promisify(fs.readFile)
const write_file = Promise.promisify(fs.writeFile)
router.use(express.json())

const md = require('../../utils/async_middleware')

const data = require('../friends_data.json')

router.get('/', md(async (req, res) => {
    const data = await read_file(path.resolve(__dirname, '../friends_data.json'), 'utf-8')
    const all_friends = JSON.parse(data)
    res.json(all_friends)
}))

// '/api/friends/:user_id'
router.get('/:user_id', md(async (req, res) => {
    const data = await read_file(path.resolve(__dirname, '../friends_data.json'), 'utf-8')
    const friends = JSON.parse(data)
    res.json(friends)
    // res.json(friends.slice(0, 6))
}))

module.exports = router