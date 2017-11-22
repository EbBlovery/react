import React, { Component } from 'react';
import axios from 'axios';

import Index from '../../component/Index/index';
import NewsList from '../NewsList/newsList';
import Wheel from '../Wheel/wheel';

import { getTime } from '../../util/getTime';

import './firstPage.less';

class FirstPage extends Component {
	constructor(props){
		super(props)
		this.state = {data:[],images:[]}
		this.t = 0;
	}
    componentDidMount(){
        axios.get('http://59.110.241.135:9999/api/4/news/latest').then(res=>{
        	const data = res.data.stories
            const images = res.data.top_stories
        	this.setState({data:data,images:images})
        })
    }
    getMore(){
        this.t++;
    	var time = getTime(this.t);
    	axios.get(`http://59.110.241.135:9999/api/4/news/before/${time}`).then(res=>{
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
        var name = '首页'
        return (
             <div className="f-contain">
             	<Index name={name}/>
                <div className="f-wheel">
                    <Wheel images={this.state.images}/>
                </div>
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