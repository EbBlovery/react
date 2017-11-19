import React, { Component } from 'react';
import { connect } from 'react-redux';

import Index from '../../component/Index/index';
import NewsList from '../NewsList/newsList';

import { getNewsInfo } from '../../store/action/control';

import './newsThub.less';

class NewsThub extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
        const match = this.props.match;
        this.props.getNewsInfo(match.params.id)
  //       axios.get(`/api/4/theme/${this.props.location.state}`).then(res=>{
  //       	const data = res.data.stories
		// console.log(data);

  //       	this.setState({data:data});
  //       })
	}
	componentDidUpdate(){
		const match = this.props.match;
        this.props.getNewsInfo(match.params.id)
	}
	render() {
		return (
            <div className="newsThub">
            	<Index />
            	<div className="newsThub-list">
            		<NewsList data={this.props.data} />
            	</div>
            </div>
		)
	}
}

function mapStateToProps(state){
     return {
          data:state.newsList.data
     }
}
function mapDispatchToProps(dispatch){
    return {
        getNewsInfo: (id)=>{
        	dispatch(getNewsInfo(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsThub);