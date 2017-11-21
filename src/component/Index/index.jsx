import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from '../Slider/slider';
import './index.less';

import {clickShow} from '../../store/action/control';

class Index extends Component {
    constructor(props){
        super(props)
        this.state = {isTrue: false}
    }
	handleShow(){
         this.setState({isTrue: !this.state.isTrue})
	}
	render(){
        var style = {
            transform:'rotate(90deg)'
        }
        console.log(this.state.isTrue)
		return (
            <div>
                <div>
                    <div className="header">
                    	<span className="span" onClick={this.props.isShow} onClick={this.handleShow.bind(this)}></span>
                    	<p>{this.props.name}</p>
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
    	nowStatus:state.control.nowStatus
    }
}

function mapDispatchToProps(dispatch){
    return {
    	isShow(value){
    		dispatch(clickShow());
    	}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);