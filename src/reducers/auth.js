const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: true,
    isLoading: false,
    user: null
}


function auth(state = initialState, action){
    switch (action.type) {
        default:
            return state;
    }
}

export default auth;