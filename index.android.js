/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppRegistry, Navigator } from 'react-native'
import { createStore } from 'redux'
import reducer from './store/reducer'
import Welcome from'./components/container/Welcome'

const store = createStore(reducer)

export default class tinyTots extends Component {
    renderScene(route, navigator){
        switch (route.name) {
            case 'Welcome':
                return (<Welcome navigator={navigator}/>)
            default:
                return (<Welcome navigator={navigator}/>)
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator
                    style={{ flex:1 }}
                    initialRoute={{ name: 'Welcome' }}
                    renderScene={ this.renderScene }
                />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('tinyTots', () => tinyTots)
