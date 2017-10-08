import React, { Component } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import { Card, CardSection, Button } from '../components/common'

const CardAnimated = Animated.createAnimatedComponent(Card)
class CardAnimatedSlide extends Component {
    state = {
        opacity: new Animated.Value(0),
    }
    componentDidMount(){
        const { opacity, width, height } = this.state
        this.startAnimations()
    }
    componentWillReceiveProps(nextProps){
        nextProps.index 
        ? this.setState({
            opacity: new Animated.Value(0),
        }) 
        : ''   
    }
    componentDidUpdate(nextProps, nextState){
        this.startAnimations()
    }
    startAnimations = () => { 
        const { opacity } = this.state
        Animated.timing(opacity, { toValue: 1, duration: 500, easing: Easing.linear }).start()
    }
    render(){
        const { opacity } = this.state
        const  spin = opacity.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg']
        })
        return(
            <CardAnimated style={{ flex:1, opacity, transform: [{rotate:spin}] }}>
                {this.props.children}
            </CardAnimated>
        )
    }
}

export default CardAnimatedSlide