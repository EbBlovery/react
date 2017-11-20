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
    		var arr = []
    		var datas = res.data.stories;
    		var val = this.state.data;
    		arr.push([...val,...datas]);
    		this.setState({
    			data:arr
    		})
    	})
    }
	render(){
        return (
             <div className="f-contain">
             	<Index />
             	<div className="f-contain-list">
             		<NewsList data={this.state.data} />
             	</div>
             	<div onClick={this.getMore.bind(this)}>loading more</div>
             </div>
        )
	}
}

export default FirstPage;