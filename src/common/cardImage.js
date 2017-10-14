import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './commonStyles'
export const CardImage = ({ children, source, onPressNavigate }) => {
    const { cardImage, fontImage, imgButton } = styles
    return(
            <Image style={cardImage} source={source}>
                <TouchableOpacity style={imgButton} onPress={() => onPressNavigate()}>
                <Text style={fontImage}>{children}</Text> 
                </TouchableOpacity> 
            </Image>
    )
}

