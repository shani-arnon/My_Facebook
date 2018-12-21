import { DISPLAY_FRIENDS_LIST, DISPLAY_POSTS_LIST } from './Timeline.actions'

let initial_state = {
    // show_menu: false,
    user_id: 3,
    posts: [],   // <POST>
    friends: [], // <FRIEND / USER>
    selected: 'feed',
    backIcon: {
        pickedY: -282,
        normalY: -261
    }
}


//  FRIEND / USER
// {
//     "id": 6,
//     "first_name": "Lenard",
//     "last_name": "Huntriss",
//     "avatar": "https://robohash.org/laboriosamoccaecativoluptates.jpg?size=150x150&set=set1",
//     "new_posts": 2
// },

//<POST>
/*
{
    "id": 27,
    "avatar": "https://robohash.org/reiciendisesteos.png?size=50x50&set=set1",
    "user_id": 4,
    "first_name": "Alford",
    "last_name": "Loutheane",
    "timestamp": "1530677324",
    "content": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "comments": [
        {
            "user_id": 4,
            "avatar": "https://robohash.org/beataeminuseum.bmp?size=50x50&set=set1",
            "timestamp": "1526854131",
            "content": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "reactions": [
                {
                    "user_id": 4,
                    "type": "like"
                },
            ]
        },
    ],
    "reactions": [
        {
            "type": "angry",
            "user_id": 2
        },
    ]
} 
*/



export default (state = initial_state, action) => {
    console.log('Timeline.reducer - action.type:', action.type)
    switch (action.type) {
        case DISPLAY_FRIENDS_LIST:
            return {
                ...state,
                friends: action.payload,
            }
        case DISPLAY_POSTS_LIST:
            return {
                ...state,
                posts: action.payload
            }
    }
}