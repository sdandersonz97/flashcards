import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, Image } from 'react-native'
import { containersStyles } from '../../styles'
import { CardImage } from '../../common'
class CategoryList extends Component {
    onPressNavigate = (category, navigate) => () => navigate('PublicDeckList',{ category })
    render(){
        const { navigate } = this.props.navigation
        return(
            <ScrollView>
                <View style={{flex:1, alignItems:'center', backgroundColor:'#fff'}}>
                        <CardImage 
                            source={require('../img/web.jpg')} 
                            onPressNavigate={this.onPressNavigate('FrontEnd', navigate)}>
                            Front End
                        </CardImage>
                        <CardImage 
                            source={require('../img/fullstack.jpg')} 
                            onPressNavigate={this.onPressNavigate('FullStack', navigate)}>
                            Full Stack
                        </CardImage>
                        <CardImage 
                            source={require('../img/android.jpg')} 
                            onPressNavigate={this.onPressNavigate('Android', navigate)}>
                            Android
                        </CardImage>
                        <CardImage 
                            source={require('../img/ios.jpg')} 
                            onPressNavigate={this.onPressNavigate('Ios', navigate)}>
                            IOS
                        </CardImage>
                </View>
            </ScrollView>
        )
    }
}

export default CategoryList