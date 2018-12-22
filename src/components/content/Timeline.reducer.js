import { FETCHING_TIMELINE_DATA, TIMELINE_DATA_FETCHED, FETCH_TIMELINE_DATA_ERROR } from './Timeline.actions'

let initial_state = {
    user_id: 3,
    posts: [],   // <POST>
    friends: [], // <FRIEND>
    selected: 'feed',
    backIcon: {
        pickedY: -282,
        normalY: -261
    },
    is_loading: false,
    error_message: ''
}

export default (state = initial_state, action) => {
    console.log('Timeline.reducer - action.type:', action.type)
    switch (action.type) {
        case FETCHING_TIMELINE_DATA:
            return {
                ...state,
                is_loading: true,
            }
        case TIMELINE_DATA_FETCHED:
            console.log('reducer friend', action.payload.friends.length)
            console.log('reducer posts', action.payload.posts.length)
            return {
                ...state,
                posts: action.payload.posts,
                friends: action.payload.friends,
                is_loading: false
            }
        case FETCH_TIMELINE_DATA_ERROR:
            return {
                ...state,
                error_message: action.payload,
                is_loading: false
            }
        default:
            return state
    }
}