export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item :null,
    token: null,
    // token : 'nulBQDV_VYwcsS6CFoUoNKQNchXVlMcumRp1OXvz_ne7Dpkt8myocmk1QIqFb06vPwvj6PncaeE-d9sywVlhi2JotQERA56BEsqKhpMT1jHmSK7wqVoX7rokGUren0X-0a7c0-x5LGF1UBwomT6O6YhUmzxPuaXgIUl',
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER' : 
        return {
            ...state,
            user: action.user
        };
        case 'SET_TOKEN' : 
        return {
            ...state,
            token: action.token
        };
        case 'SET_PLAYLISTS' :
        return {
            ...state,
            playlists: action.playlists
        };
        default:
        return state;
    }
}

export default reducer;