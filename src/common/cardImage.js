import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './commonStyles'
export const CardImage = ({ children, source, onPressNavigate }) => {
    const { cardImage, fontImage } = styles
    return(
        <TouchableOpacity onPressNavigate={() => onPressNavigate()}>
            <Image style={cardImage} source={source}>
                <Text style={fontImage}>{children}</Text> 
            </Image>
        </TouchableOpacity>
    )
}

