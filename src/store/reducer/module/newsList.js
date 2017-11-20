var defaultState = {
	data: {}
}

function newsList(state = defaultState,action){
    var states = Object.assign({},state);
    switch(action.type){
        case 'GETNEWSINFO':
            states.data = action.payload.data
        default :
            return states
    }
}

export default newsList;