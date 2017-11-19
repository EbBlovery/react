var defaultState = {
	data: {}
}

function reducer(state = defaultState,action){
    var state = Object.assign({},state);
    switch(action.type){
        case 'GETNEWSINFO':
            state.data = action.payload.data;
            return state
        default :
            return state
    }
}

export default reducer;