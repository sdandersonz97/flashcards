import React from 'react'
import { DeckSwiper, Card, CardItem, Right, Left, Body, Text } from 'native-base'
import { Button } from '../../common'
import { fontStyles, containersStyles } from '../../styles' 
const QuizEmpty = props => {
    const { titleStyle, subtitleStyle } = fontStyles
    const { deckTitle, corrects, deckSize, onNavigate, onReset } = props
    return(
        <Card>
            <CardItem cardHeader>
                <Text style={titleStyle}> You have finished the {deckTitle} Quiz </Text>
            </CardItem>
            <CardItem cardBody>
                <Text style={subtitleStyle}> You have answer {corrects} questions correctly of {deckSize}  Quiz </Text>
            </CardItem>
            <CardItem cardFooter>
                <Left><Button style={{width:150}} onPress={()=>onReset()}> Start again </Button></Left>
                <Body/>
                <Right><Button style={{width:150}} onPress={()=>onNavigate()}> Close </Button></Right>
            </CardItem>
        </Card>
    )
}
export default QuizEmpty