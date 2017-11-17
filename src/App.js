import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/index';
import RouterMap from './router/RouterMap';


class App extends Component{
    render() {
    	return (
            <Provider store={store}>
            	<RouterMap></RouterMap>
            </Provider>
    	)
    }
}

export default App;