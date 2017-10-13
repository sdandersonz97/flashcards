import _ from 'lodash'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card } from './card'
import { fontStyles } from '../styles' 
import { ActionSheet } from "native-base"



export class Deck extends Component {
    render(){
        const { deckTitle, questions, onClickNavigate } = this.props
        const { titleStyle, subtitleStyle } = fontStyles
        const BUTTONS = [
            {
                name:"New card",
                action: ()=>onClickNavigate('AddPrivateCard')
            }, 
            {
                name:"Start Quiz",
                action: ()=>onClickNavigate('PrivateDeckQuiz')
            }, 
            {
                name:"Share",
                action: ()=>{}
            }, 
            {
                name:"Delete",
                action: ()=>{}
            }, 
            {
                name:"Cancel",
                action: ()=>{}
            }
        ]
        const DESTRUCTIVE_INDEX = 3
        const CANCEL_INDEX = 4
        return(
            <TouchableOpacity onPress={()=>ActionSheet.show(
                {
                options: _.map(BUTTONS, button => button.name),
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Deck Action"
                },
                buttonIndex => BUTTONS[buttonIndex].action()
            )} >
                <Card>
                    <Text style={titleStyle}> { deckTitle }  </Text> 
                    <Text style={subtitleStyle}> { questions ? _.size(questions) : 0 } Cards </Text> 
                </Card>
            </TouchableOpacity>
        )
    }
}