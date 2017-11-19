
var defaultState = {
	nowStatus: false
}

function control(state = defaultState, action){
    var states = Object.assign({},state);
    switch (action.type) {
    	case 'CLICKCHANGE':
    	    var {value} = action.payload;
    	    states.nowStatus = !state.nowStatus;
    	    return states;
        case 'CLICKCLOSE':
            states.nowStatus = false;
            return states;
        default:
            return states.nowStatus;
    }
}

export default control;
