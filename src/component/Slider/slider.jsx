import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import axios from 'axios';
import {clickClose} from '../../store/action/control';

import Shadow from '../Shadow/shadow';


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
         return (
             <div className={showclass} >
                <div className="slider-bar">
                    <div className="info-bar">
                        <img src={require("../../static/logo.png")} alt="asda"/>
                    </div>
                    <div className="list">
                        <ul>
                            <li className="first-page">
                                <Link to={{
                                    pathname:'/',
                                    state:{name:'首页'}
                                }} onClick={this.props.isClose}>
                                    <img src={require("../../static/logo.png")} alt="shoeyw"/>
                                    <p>首页</p>
                                </Link>
                            </li>
                            {
                                option.data.length>0 && option.data.map((item,index)=>{
                                    return (
                                        <li key={index}>
                                            <Link to={{pathname:'/newsThub/'+item.id,
                                                       state:{id: item.id,thub:item.thumbnail,name:item.name}}} onClick={this.props.isClose}>
                                                <img src={item.thumbnail || require("../../static/logo.png")} alt={item.name}/>
                                                <p>{item.name}</p>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div onClick={this.props.isClose} className="shadow">
                    <Shadow />
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

function mapDispatchToProps(dispatch){
     return {
        isClose(){
            dispatch(clickClose())
        }
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(Slider);