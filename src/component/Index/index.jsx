import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from '../Slider/slider';
import './index.less';

import {clickShow} from '../../store/action/control';

class Index extends Component {
    constructor(props){
        super(props)
    }
	render(){
        var style;
        if(this.props.nowStatus){
            style = {
                transform:'rotate(90deg)'
            }
        }else{
            style = {}
        }
		return (
            <div>
                <div>
                    <div className="header">
                    	<span style={style} className="span" onClick={this.props.isShow}></span>
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