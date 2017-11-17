

export function clickShow(){
    return (dispatch) => {
    	dispatch({
    		type:'CLICKCHANGE',
    		payload: { value: false }
    	})
    }
}