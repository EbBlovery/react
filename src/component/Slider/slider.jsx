import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './slider.less';


class Slider extends Component {
	constructor(props){
         super(props)
	}
	render(){
		 var showclass = classNames({
		 	"slider":true,
		 	"show":this.props.isShow
		 })
         return (
             <div className={showclass} >
             	<div className="info-bar">asdasd
             		<img src={'../../static/logo.png'}/>
             	</div>
             	<div>
             		<ul>
             			<li>
             			    <Link to="/newsThub">
             				    <img src="#" />
             				    <p>aasdadasdasdasd</p>
             				</Link>
             			</li>
             		</ul>
             	</div>
             </div>
         )
	}
}

function mapStateToProps(state){
    return {
    	isShow:state.control.nowStatus
    }
}

export default connect(mapStateToProps,null)(Slider);