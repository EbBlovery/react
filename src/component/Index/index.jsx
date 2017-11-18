import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from '../Slider/slider';
import './index.less';

import {clickShow} from '../../store/action/control';

class Index extends Component {
	handleShow(e){
         console.log(123123);
	}
	render(){
		return (
            <div>
                <div>
                    <div className="header">
                    	<span className="span" onClick={this.props.isShow}></span>
                    	<p>首页{this.props.nowStatus}</p>
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