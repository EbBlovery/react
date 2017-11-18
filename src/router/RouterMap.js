import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Index from '../component/Index';
import NewsThub from '../view/NewsThub/NewsThub';
import FirstPage from '../view/FirstPage/firstPage'

class RouterMap extends Component {
	render(){
		return (
            <Router>
                <div>
                    <Route exact path="/" component={FirstPage}/>
                    <Route path="/index" component={Index} />
                    <Route path="/newsThub" component={NewsThub} />
                </div>
            </Router>
		)
	}
}

export default RouterMap;