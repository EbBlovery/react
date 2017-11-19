import React, { Component } from 'react';
import axios from 'axios';

import Index from '../../component/Index/index';
import NewsList from '../NewsList/newsList';

import './firstPage.less';

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
             <div className="f-contain">
             	<Index />
             	<div className="f-contain-list">
             		<NewsList data={this.state.data} />
             	</div>
             </div>

        )
	}
}

export default FirstPage;