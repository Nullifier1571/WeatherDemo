
'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureRealm from './realm/configure';
import configureStore from './store/configure';



type State = {
    store: any;
};

export default class Main extends Component<Props> {
    state: State;
    constructor(){
        super();
        this.state={
            store:configureStore()
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App/>
            </Provider>
        );
    }
}