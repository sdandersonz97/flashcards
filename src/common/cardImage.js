import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './commonStyles'
import { Card, CardItem } from 'native-base'
export const CardImage = ({ children, source, onPressNavigate }) => {
    const { cardImage, imgCardContainer, fontImage, imgButton } = styles
    return( <View style={imgCardContainer}>
                <Image style={cardImage} source={source}>
                    <TouchableOpacity style={imgButton} onPress={() => onPressNavigate()}>
                    <Text style={fontImage}>{children}</Text> 
                    </TouchableOpacity> 
                </Image>
            </View>
              
    )
}

