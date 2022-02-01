// a reducer takes in 2 things

// 1. the action (info about what happened)
// 2. copy of current state

function postcomments(state = [], action) {
    switch(action.type){
        case 'ADD_COMMENT':
            /// return the new state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        
        case 'REMOVE_COMMENT':
            return state;

        default:
            return state;
    }
    return state;
}

function comments(state = [], action){
    if(typeof action.postId !== 'undefined'){
        return {
            // take current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postcomments(state[action.postId],action)
        }
    }
    return state;
}


export default comments;
