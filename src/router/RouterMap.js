import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Index from '../component/Index';
import NewsThub from '../view/NewsThub/NewsThub';

class RouterMap extends Component {
	render(){
		return (
            <Router>
                <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/newsThub/:id" component={NewsThub} />
                </div>
            </Router>
		)
	}
}

export default RouterMap;