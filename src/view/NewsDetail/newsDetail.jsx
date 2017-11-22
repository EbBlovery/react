import React, { Component } from 'react';
import axios from 'axios';

import './newsDetail.less';

class NewsDetail extends Component {
	constructor(props){
         super(props)
         this.state = {data: 'loading...' }
	}
	componentDidMount(){
         axios.get(`http://59.110.241.135:9999/api/4/news/${this.props.location.state.id}`).then(res=>{
         	 var css = res.data.css
         	 var c = css.map(item=>{
         	 	return `<link href="${item}" rel="stylesheet" />`
         	 })
         	 var h = res.data.body
             this.setState({
             	data: h
             })
	         document.getElementById('contents').innerHTML=h + c;
         })
	}
	goToBack(){
		this.props.history.goBack()
	}
	render(){
		return (
            <div>
            	<div className="newsDetail">
            	    <span onClick={this.goToBack.bind(this)} ><img src={require('../../static/back.svg')} alt="img"/></span>
            	    <p>{this.props.location.state.title}</p>
            	</div>
            	<div id="contents">
            		{this.state.data && this.state.data}
            	</div>
            </div>
		)
	}
}

export default NewsDetail;