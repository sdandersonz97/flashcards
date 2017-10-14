import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { CardImage } from '../../common'
class CategoryList extends Component {
    onPressNavigate = (category, navigate) => () => navigate('PublicDeckList',{ category })
    render(){
        const { navigate } = this.props.navigation
        return(
            <View style={{flex:1}}>
                <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                    <CardImage 
                        source={require('../img/robotics.jpg')} 
                        onPressNavigate={this.onPressNavigate('Robotic', navigate)}>
                        Robotics
                    </CardImage>
                    <CardImage 
                        source={require('../img/web.jpg')} 
                        onPressNavigate={this.onPressNavigate('FrontEnd', navigate)}>
                        Front End
                    </CardImage>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                    <CardImage 
                        source={require('../img/android.jpg')} 
                        onPressNavigate={this.onPressNavigate('Android', navigate)}>
                        Android
                    </CardImage>
                    <CardImage 
                        source={require('../img/fullstack.jpg')} 
                        onPressNavigate={this.onPressNavigate('FullStack', navigate)}>
                        Full Stack
                    </CardImage>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
                    <CardImage 
                        source={require('../img/vr.jpg')} 
                        onPressNavigate={this.onPressNavigate('VR', navigate)}>
                        VR
                    </CardImage>
                    <CardImage 
                        source={require('../img/ai.jpg')} 
                        onPressNavigate={this.onPressNavigate('AI', navigate)}>
                        Artificial Intelligence
                    </CardImage>
                </View>
            </View>
        )
    }
}

export default CategoryList