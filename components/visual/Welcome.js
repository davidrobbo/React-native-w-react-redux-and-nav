import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, Animated } from 'react-native'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            fadeAnim: 0,
            showWelcome: false
        }
    }

    componentDidMount(){
        this.animate()
    }
    
    animate(){
        let count = 0
        let self = this
        while(count<1000){
            setTimeout(() => {
                self.setState({fadeAnim: self.state.fadeAnim+0.001})
                if (self.state.fadeAnim >= 0.9) {
                    self.setState({showWelcome: true})
                }
            }, 3)
            count++
        }
    }

    render() {
        const welcome = this.state.showWelcome ?
            <Text style={{flex:1}}>HI</Text> : null

        return (
            <View style={styles.parent}>
                <Animated.Image source={require('../../img/logo.png')} style={{resizeMode:'contain', opacity: this.state.fadeAnim, flex:1}}/>
                {welcome}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: '#FCFCFC',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        resizeMode: 'contain'
    }
})