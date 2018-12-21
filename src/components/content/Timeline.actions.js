export const DISPLAY_FRIENDS_LIST = 'DISPLAY_FRIENDS_LIST'
export const DISPLAY_POSTS_LIST = 'DISPLAY_FRIENDS_LIST'


export const display_friend_list = (friend_data) => ({
    type: DISPLAY_FRIENDS_LIST,
    payload: friend_data
})

export const display_posts_list = (posts_data) => ({
    type: DISPLAY_POSTS_LIST,
    payload: posts_data
})

//async actions
export const FETCHING_TIMELINE_DATA = 'FETCHING_TIMELINE_DATA'
export const TIMELINE_DATA_FETCHED = 'TIMELINE_DATA_FETCHED'
export const FETCH_TIMELINE_DATA_ERROR = 'FETCH_TIMELINE_DATA_ERROR'

export const fetch_timeline_data = (user_id) => {
    const POSTS_URL = `/api/posts/${user_id}`
    const FRIENDS_URL = `/api/friends/${user_id}`

    return (dispatch) => {

        dispatch({ type: FETCHING_TIMELINE_DATA })



        return Promise.all([
            fetch(POSTS_URL)
                .then(res => {
                    return res.json()
                })
            ,
            fetch(FRIENDS_URL)
                .then(res => {
                    return res.json()
                })
        ])
            .then(([posts, friends]) => {
                console.log('friend', friends.length)
                console.log('posts', posts.length)
                dispatch({
                    type: TIMELINE_DATA_FETCHED,
                    payload: {
                        posts,
                        friends
                    }
                })
            })
            .catch(err => {
                console.log('parsing faild', err)
                dispatch({
                    type: FETCH_TIMELINE_DATA_ERROR,
                    payload: err.message
                })
            })
    }
}