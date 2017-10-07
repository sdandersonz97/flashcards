import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import glamorous from 'glamorous-native'
import { Card, CardSection } from './common'
const DeckView = glamorous.view({
    alignItems:'center',
    margin: 50,

})
const Deck = (props) => {
    const { deckTitle, questions, onClickNavigate } = props
    return(
        <Card>
            <TouchableOpacity onPress={()=>onClickNavigate()} >
                <Text style={{fontSize:30,textAlign:'center'}}> { deckTitle }  </Text> 
                <Text style={{fontSize:15, textAlign:'center'}}> { questions.length } Cards </Text> 
            </TouchableOpacity> 
        </Card>
    )
}
export default Deck