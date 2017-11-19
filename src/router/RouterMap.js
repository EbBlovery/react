import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Index from '../component/Index';
import NewsThub from '../view/NewsThub/NewsThub';
import FirstPage from '../view/FirstPage/firstPage'
import NewsDetail from '../view/NewsDetail/newsDetail'

class RouterMap extends Component {
	render(){
		return (
            <Router>
                <Switch>
                    <div>
                        <Route exact path="/" component={FirstPage}/>
                        <Route path="/index" component={Index} />
                        <Route path="/newsThub/:id" component={NewsThub} />
                        <Route path="/newsDetail/:detail" component={NewsDetail} />
                    </div>
                </Switch>
            </Router>
		)
	}
}

export default RouterMap;