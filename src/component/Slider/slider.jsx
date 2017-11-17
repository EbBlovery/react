import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './slider.less';

class Slider extends Component {
	constructor(props){
         super(props)
	}
	render(){
         return (
             <div className="slider" className={this.props.isShow?'show':''}>
             	<div>xxxx</div>
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