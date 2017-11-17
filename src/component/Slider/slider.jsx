import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './slider.less';

class Slider extends Component {
	constructor(props){
         super(props)
	}
	render(){
         return (
             <div className="slider">
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

export default Slider;