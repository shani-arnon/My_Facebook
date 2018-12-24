const CREATING_POST = 'CREATING_POST'
const POST_CREATED = 'POST_CREATED'
const POST_CREATION_ERROR = 'POST_CREATION_ERROR'

// let post = {
//     user_id: this.state.user_id,
//     content: this.state.new_post
// }

export const create_post = (post_data) => {

    const NEW_POST_URL = '/api/posts'
    console.log('NEW_POST_URL', NEW_POST_URL)
    

    return (dispatch) => {

        dispatch({ type: CREATING_POST})
        console.log('CREATING_POST', CREATING_POST)

        fetch( NEW_POST_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(post_data)
              })
              .then(res => {
                   return res.json()
              })
              .then(created_post_data => {
                    dispatch({
                        type: POST_CREATED,
                        payload: created_post_data
                    })
                })
               .catch(err => {
                    console.log('creating post faild', err)
                    dispatch({
                            type: POST_CREATION_ERROR,
                            payload: err.message
                    })
                })
    }
}




// Promise.all([
// fetch(NEW_POST_URL, {
//     method: 'post',
//     body: JSON.stringify(post)
// })
//     .then(res => {
//         return res.json({
//             user_id: this.state.user_id,
//             content: this.state.new_post
//         })
//     })
//     .catch(ex => {
//         console.log('parsing faild', ex)
//     })