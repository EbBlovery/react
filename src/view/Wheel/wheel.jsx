import React, { Component } from 'react';

import './wheel.less';

class Wheel extends Component {
	render(){
		var style={
			transform:"translateX(-50px)"
		}
		return (
            <ul style={style} className="wheel">
                 {
                 	this.props.images.map((item,index)=>{
                 		return (
                            <li key={index}>
                            	<img src={item.image}/>
                            	<p>{item.title}</p>
                            </li>
                 		)
                 	})
                 }
            </ul>
		)
	}
}

export default Wheel;