import React, { Component } from 'react';

import './wheel.less';

class Wheel extends Component {
	constructor(props){
		super(props)
		this.state = {val:0,}
		this.starts = this.starts.bind(this)
	}
	componentDidMount(){
		setInterval(this.starts,3000)
	}
	starts(){
        const p = window.getComputedStyle((this.imgl),null);
        const len = p.width;
        console.log(len)
	}
	render(){
		var style={
			transform:`translateX(${this.state.val}px)`
		}
		return (
            <ul style={style} ref={(val) => { this.imgl = val; } } className="wheel">
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