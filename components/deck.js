import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import glamorous from 'glamorous-native'
import { Card, CardSection } from './common'
import { titleStyle, subtitleStyle } from '../helpers/fonts' 
const DeckView = glamorous.view({
    alignItems:'center',
    margin: 50,

})
const Deck = (props) => {
    const { deckTitle, questions, onClickNavigate } = props
    return(
        <TouchableOpacity onPress={()=>onClickNavigate()} >
            <Card>
                <Text style={titleStyle}> { deckTitle }  </Text> 
                <Text style={subtitleStyle}> { questions.length } Cards </Text> 
            </Card>
        </TouchableOpacity>
    )
}
export default Deck