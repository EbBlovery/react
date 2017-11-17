import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Slider from '../Slider/slider';
import './index.less';

import {clickShow} from '../../store/action/control';

class Index extends Component {
	constructor(props){
         super(props)
	}
	handleShow(e){
         console.log(123123);
	}
	render(){
		return (
            <div>
                <div>
                    <div className="header">
                    	<span className="span" onClick={this.props.isShow}></span>
                    	<p>首页{this.props.count}</p>
                    </div>
                    <div>
                         {this.props.children}
                    </div>
                </div>
            	<div>
            		<Slider />
            	</div>
            </div>
		)
	}
}

function mapStateToProps(state){
    return {
    	count:state.control.count
    }
}

function mapDispatchToProps(dispatch){
    return {
    	isShow(value){
    		dispatch(clickShow(value))
    	}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);