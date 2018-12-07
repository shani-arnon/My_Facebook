const fs = require('fs')
const Promise = require('bluebird')
const express = require('express')
const path = require('path')
const router = express.Router()
const read_file = Promise.promisify(fs.readFile)
const write_file = Promise.promisify(fs.writeFile)
router.use(express.json())

const md = require('../../utils/async_middleware')

const data = require('../posts_data.json');
//Get All Posts
router.get('/', md(async (req, res) => {
    const data = await read_file(path.resolve(__dirname, '../posts_data.json'), 'utf-8')
    const all_posts = JSON.parse(data)
    res.json(all_posts)
}))
// //List of Posts by user
// '/api/posts/:user_id'
router.get('/:user_id', md(async (req, res) => {
    const data = await read_file(path.resolve(__dirname, '../posts_data.json'), 'utf-8')
    const all_posts = JSON.parse(data)
    const user_posts = all_posts.filter(post => post.author.user_id == req.params.user_id)
    res.json(user_posts)
}))
//create a new post
router.post('/', md(async (req, res) => {
    const file_path = path.resolve(__dirname, '../posts_data.json');
    const data = await read_file(file_path, 'utf-8')
    const all_posts = JSON.parse(data)
    const new_post = {
        id: all_posts.length + 1,
        user_id: req.body.user_id,
        timestamp: new Date().getTime(),
        content: req.body.content
    }
    all_posts.push(new_post)
    await write_file(file_path, JSON.stringify(all_posts))
    res.json(new_post)
}))
// router.delete('./:user_id', md(async(req, res) => {
//     const post = await read_file(path.resolve(__dirname, '../posts_data.json'), 'utf-8')
//     const delete_post = 
// }))



// //List of Posts relevant for user
// app.get('/api/posts/"user_id"', (req, res) => {
//     res.json({ posts: data.posts });
// })

module.exports = router
