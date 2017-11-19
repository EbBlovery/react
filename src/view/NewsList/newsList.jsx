import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class NewsList extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
            <ul>
         		{
         			this.props.data.length>0 && this.props.data.map((item,index)=>{
         				return (
                            <li>
                                <Link to="/">
                                    <img src={item.thumbnail} />
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



