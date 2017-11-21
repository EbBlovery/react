import React, {Component } from 'react';
import { Link } from 'react-router-dom';

import './newsList.less';

class NewsList extends Component {
	render(){
		return (
            <ul className="mainList">
         		{
         			this.props.data.length>0 && this.props.data.map((item,index)=>{
         				return (
                            <li key={index} >
                                <Link key={index} to={{pathname: "/newsDetail/" + item.id,
                                           state: {title:item.title,id:item.id}
                                          }}>
                                    <img className={(item.images || item.thumbnail)?'image':''} src={item.thumbnail || item.images } alt={item.title}/>
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



