
var defaultState = {
	count: 0
}

function reducer(state = defaultState, action){
    var state = Object.assign({},state);
    switch (action.type) {
    	case 'CLICKCHANGE':
    	    var {value} = action.payload;
    	    state.count += value;
        default:
            return state;
    }
}

export default reducer;