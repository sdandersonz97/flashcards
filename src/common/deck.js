import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card } from './card'
import { fontStyles } from '../styles' 
export const Deck = (props) => {
    const { deckTitle, questions, onClickNavigate } = props
    const { titleStyle, subtitleStyle } = fontStyles
    return(
        <TouchableOpacity onPress={()=>onClickNavigate()} >
            <Card>
                <Text style={titleStyle}> { deckTitle }  </Text> 
                <Text style={subtitleStyle}> { questions.length } Cards </Text> 
            </Card>
        </TouchableOpacity>
    )
}