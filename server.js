require('dotenv').config()

const express = require('express');
const morgan = require('morgan')
const path = require('path')
// const data = require('./user/DATA.json');
const p = require('./utils/color_logger')(path.basename(__filename));

const { NODE_ENV, API_PORT, API_HOST } = process.env

const posts_router = require('./services/posts/posts.router');
const friends_router = require('./services/friends/friends.router');

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.resolve(__dirname, 'build')))



// test routing
app.get('/api', (req, res) => {
    res.status(200).json({ express: 'Main API endpoint' });
});


//api routing

// //List of Posts by user
app.use('/api/posts', posts_router)
// app.use('api/timeline/:id', user_router);


app.use('/api/friends', friends_router)



// //List of Posts relevant for user
// app.use('/api/newsfeed/:id', user_router)


// app.get('/api/event/:id', (req, res) => {
//     res.json({ event: data.events });
// })
// //event Returns Event object
// app.use('/api/event/:id', user_router)




// central error handling
app.use((err, req, res, next) => {
    p.error(err)
    if (NODE_ENV === 'production')
        res.status(500).json({ error: 'internal server error' })
    else
        res.status(500).json({ error: err.message, stack: err.stack })
})

//start the express api server
app.listen(API_PORT, API_HOST, (error) => {
    if (error) p.error(error)
    else p.magenta(`express api is live  ✨ ⚡ http://${API_HOST}:${API_PORT} ✨ ⚡`)
});
