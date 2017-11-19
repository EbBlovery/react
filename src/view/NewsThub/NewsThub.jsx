import React, { Component } from 'react';
import axios from 'axios';

import Index from '../../component/Index/index';
import NewsList from '../NewsList/newsList';


class NewsThub extends Component {
	constructor(props){
		super(props)
		this.state={
			data: {}
		}
	}
	componentDidMount(){

		console.log(this.props.match);
        axios.get(`/api/4/theme/${this.props.location.state}`).then(res=>{
        	const data = res.data.stories
        	console.log(data);
        	this.setState({data:data});
        })
	}
	componentWillUnmount(){
		this.setState({data:{}});
	}
	render() {
		return (
            <div>
            	<Index />
            	<div>
            		<NewsList data={this.state.data}/>
            	</div>
            </div>
		)
	}
}

export default NewsThub;