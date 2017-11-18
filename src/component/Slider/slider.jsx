import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import axios from 'axios';

import './slider.less';


class Slider extends Component {
	constructor(props){
         super(props)
         this.state = {'data':{} }
	}
    componentDidMount(){
        axios.get('/api/4/themes').then(res=>{
            const data = res.data.others;
            this.setState({'data':data})
        })
    }
	render(){
		 var showclass = classNames({
		 	"slider":true,
		 	"show":this.props.isShow
		 })
         const option = this.state
         console.log(option)
         return (
             <div className={showclass} >
             	<div className="info-bar">
             		<img src={require("../../static/logo.png")} alt="asda"/>
             	</div>
             	<div className="list">
             		<ul>
             			<li>
             			    <Link to="/newsThub">
             				    <img src="../../static/logo.png" />
             				    <p>首页</p>
             				</Link>
             			</li>
                        {
                            option.data.length>0 && option.data.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <Link to="/newsThub">
                                            <img src={item.thumbnail} />
                                            <p>{item.name}</p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
             		</ul>
             	</div>
             </div>
         )
	}
}

class List extends Component {

}

function mapStateToProps(state){
    return {
    	isShow:state.control.nowStatus
    }
}

export default connect(mapStateToProps,null)(Slider);