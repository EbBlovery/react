import React, {Component } from 'react';
import { Link } from 'react-router-dom';

import './newsList.less';

class NewsList extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
            <ul className="mainList">
         		{
         			this.props.data.length>0 && this.props.data.map((item,index)=>{
         				return (
                            <li>
                                <Link to="/">
                                    <img src={item.thumbnail || item.images } />
                                    <p>{item.title}</p>
                                </Link>
                            </li>
         				)
         			})
         		}
     		</ul>
		)
	}
} 

export default NewsList;


