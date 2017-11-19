var defaultState = {
	data: {}
}

function newsList(state = defaultState,action){
    var state = Object.assign({},state);
    switch(action.type){
        case 'GETNEWSINFO':
            state.data = action.payload.data;
        default :
            return state
    }
}

export default newsList;