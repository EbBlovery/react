import React, { Component } from 'react';
import axios from 'axios';

class FirstPage extends Component {
	constructor(props){
		super(props)
	}
    compoentDidMount(){
        axios.get('/api/4/news/hot').then(res=>{
        	console.log(res)
        })
    }
	render(){

	}
}

export default FirstPage;