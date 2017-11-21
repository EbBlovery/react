import React, { Component } from 'react';

import './wheel.less';

class Wheel extends Component {
	constructor(props){
		super(props)
		this.state = {val:0}
		this.starts = this.starts.bind(this)
		this.i = 0;
	}
	componentDidMount(){
		this.inter = setInterval(this.starts,3000)
	}
	starts(){
        var p = window.getComputedStyle((this.imgl),null);
        this.i++
        if(this.i>4) this.i = 0;
        var len = -((p.width.split('px')[0])/5)*this.i;
        this.setState({val: len})

	}
	componentWillUnmount(){
         clearInterval(this.inter)
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
                            	<img src={item.image} alt={item.title}/>
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