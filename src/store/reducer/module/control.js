
var defaultState = {
	nowStatus: false
}

function reducer(state = defaultState, action){
    var state = Object.assign({},state);
    console.log(action.type)
    switch (action.type) {
    	case 'CLICKCHANGE':
    	    var {value} = action.payload;
    	    state.nowStatus = !state.nowStatus;
    	    console.log(state.nowStatus);
    	    return state;
        case 'CLICKCLOSE':
            state.nowStatus = false;
            return state;
        default:
            return state.nowStatus;
    }
}

export default reducer;