

export function clickShow(){
    return (dispatch) => {
    	dispatch({
    		type:'CLICKCHANGE',
    		payload: { value: false }
    	})
    }
}

export function clickClose(){
     return (dispatch) => {
     	dispatch({
     		type:'CLICKCLOSE',
     	})
     }
}