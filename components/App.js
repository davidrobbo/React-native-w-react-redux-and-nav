import React, { Component } from 'react'
import { Navigator, StyleSheet, View } from 'react-native'
import Welcome from './container/Welcome'

export default class App extends Component {
    renderScene(route, navigator){
        let _navigator = navigator;
        switch (route.name) {
            case 'Welcome':
                return (<Welcome navigator={navigator}/>)
            default:
                return (<Welcome navigator={navigator}/>)
        }
    }

    render() {
        return (
            <View>
                <Navigator
                    style={{ flex:1 }}
                    initialRoute={{ name: 'Welcome' }}
                    renderScene={ this.renderScene }
                />
            </View>
        )
    }
}

const style = StyleSheet.create({

})