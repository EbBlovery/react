import React, { Component } from 'react';

import './newsDetail.less';

class NewsDetail extends Component {
	constructor(props){
         super(props)
	}
	componentDidMount(){

	}
	goToBack(){
		this.props.history.goBack()
	}
	render(){
		return (
            <div>
            	<div className="newsDetail">
            	    <span onClick={this.goToBack.bind(this)} >back</span>
            	</div>
            	<div>
            		
            	</div>
            </div>
		)
	}
}

export default NewsDetail;