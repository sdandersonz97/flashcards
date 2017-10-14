import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { CardImage } from '../../common'
class CategoryList extends Component {
    onPressNavigate = (category, navigate) => navigate('PublicDecks',{ category })
    render(){
        const source = imgName => `../img/${imgName}.jpg`
        const { navigate } = this.props.navigation
        return(
            <View style={{flex:1}}>
                <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                    <CardImage 
                        source={require(source('robotic'))} 
                        onPressNavigate={() => this.onPressNavigate('Robotic', navigate)}>
                        Robotics
                    </CardImage>
                    <CardImage 
                        source={require(source('web'))} 
                        onPressNavigate={() => this.onPressNavigate('FrontEnd', navigate)}>
                        Front End
                    </CardImage>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                    <CardImage 
                        source={require(source('android'))} 
                        onPressNavigate={() => this.onPressNavigate('Android', navigate)}>
                        Android
                    </CardImage>
                    <CardImage 
                        source={require(source('fullstack'))} 
                        onPressNavigate={() => this.onPressNavigate('FullStack', navigate)}>
                        Full Stack
                    </CardImage>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                    <CardImage 
                        source={require(source('vr'))} 
                        onPressNavigate={() => this.onPressNavigate('VR', navigate)}>
                        VR
                    </CardImage>
                    <CardImage 
                        source={require(source('ai'))} 
                        onPressNavigate={() => this.onPressNavigate('AI', navigate)}>
                        Artificial Intelligence
                    </CardImage>
                </View>
            </View>
        )
    }
}

export default CategoryList