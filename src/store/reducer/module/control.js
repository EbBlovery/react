
var defaultState = {
	nowStatus: false
}

function control(state = defaultState, action){
    var state = Object.assign({},state);
    switch (action.type) {
    	case 'CLICKCHANGE':
    	    var {value} = action.payload;
    	    state.nowStatus = !state.nowStatus;
    	    return state;
        case 'CLICKCLOSE':
            state.nowStatus = false;
            return state;
        default:
            return state.nowStatus;
    }
}

export default control;
