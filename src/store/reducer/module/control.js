
var defaultState = {
	nowStatus: false
}

function reducer(state = defaultState, action){
    var state = Object.assign({},state);
    switch (action.type) {
    	case 'CLICKCHANGE':
    	    var {value} = action.payload;
    	    state.nowStatus = !state.nowStatus;
    	    console.log(state.nowStatus);
    	    return state;
    	    
        default:
            return state.nowStatus;
    }
}

export default reducer;