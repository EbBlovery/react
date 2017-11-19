import axios from 'axios';

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

export function getNewsInfo(val){
     return dispatch => {
        axios.get(`/api/4/theme/${val}`)
           .then(res=>{
                dispatch(getNews(res.data.stories))
           }).catch(err=>{
                console.log(err)
           })
     }
}

export function getNews(data){
     return dispatch => {
         dispatch({
            type:'GETNEWSINFO',
            payload:{
                data: data
            }
         })
     }
}