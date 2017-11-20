import React, { Component } from 'react';
import axios from 'axios';

import Index from '../../component/Index/index';
import NewsList from '../NewsList/newsList';

import { getTime } from '../../util/getTime';

import './firstPage.less';

class FirstPage extends Component {
	constructor(props){
		super(props)
		this.state = {data:[]}
		this.t = 0;
	}
    componentDidMount(){
        axios.get('/api/4/news/latest').then(res=>{
        	const data = res.data.stories
        	this.setState({data:data})
        })
    }
    getMore(){
        this.t++;
    	var time = getTime(this.t);
    	axios.get(`/api/4/news/before/${time}`).then(res=>{
    		var datas = res.data.stories;
    		var val = this.state.data;
    		datas.unshift(...val)
    		this.setState({
    			data:datas
    		})
    	}).catch(err=>{
    		console.log(err)
    	})
    }
	render(){
        return (
             <div className="f-contain">
             	<Index />
             	<div className="f-contain-list">
             		<NewsList data={this.state.data} />
             	</div>
             	<div className="loadMore" onClick={this.getMore.bind(this)}>
             	    <p>loading more...</p>
             	</div>
             </div>
        )
	}
}

export default FirstPage;