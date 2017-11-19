import React, { Component } from 'react';


class NewsDetail extends Component {
	constructor(props){
         super(props)
	}
	componentDidMount(){
		console.log(this.props.match)
	}
	render(){
		return (
            <div>asdasdas</div>
		)
	}
}

export default NewsDetail;