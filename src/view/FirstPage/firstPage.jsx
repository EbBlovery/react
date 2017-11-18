import React, { Component } from 'react';
import axios from 'axios';

import Index from '../../component/Index/index';


class FirstPage extends Component {
	constructor(props){
		super(props)
		this.state = {'data':{}}
	}
    componentDidMount(){
        axios.get('/api/4/news/hot').then(res=>{
        	const data = res.data.recent
        	this.setState({'data':data})
        })
    }
	render(){

        return (
             <div>
             	<Index />
             	<div>
             		<ul>
	             		{
	             			this.state.data.length>0 && this.state.data.map((item,index)=>{
	             				return (
	                                <li>{item.title}</li>
	             				)
	             			})
	             		}
             		</ul>
             	</div>
             </div>

        )
	}
}

export default FirstPage;