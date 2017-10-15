import _ from 'lodash'
import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { fontStyles } from '../../styles' 
import { gray } from '../../styles/colors'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, ActionSheet } from 'native-base';
const Deck = (props) => {
    const { deckTitle, questions, category, onClickNavigate, actionSheet, likes, uid, onPressLike, deckId } = props
    const { titleStyle, SubtitleStyle} = fontStyles
    const BUTTONS = [
        ...actionSheet,
        {
            name:"Cancel",
            action: ()=>{}
        }
    ]
    const CANCEL_INDEX = 4
    return (
          <Card>
            <CardItem>
                <Left></Left>
                <Body style={{alignItems:'center'}}>
                    <Text style={titleStyle}>{deckTitle}</Text>
                </Body>
                <Right>
                    <Button style={{height:40, width:28}} transparent onPress={()=>ActionSheet.show(
                        {
                        options: _.map(BUTTONS, button => button.name),
                        cancelButtonIndex: CANCEL_INDEX,
                        title: "Deck Action"
                        },
                        buttonIndex => BUTTONS[buttonIndex].action()
                    )}> 
                        <Icon active name="md-more" size={40} /> 
                    </Button>
                </Right>
            </CardItem>
            <CardItem style={{borderBottomWidth:1, borderColor: gray}}>
                <Left/>
                <Body style={{alignItems:'center'}}>
                    <Text style={SubtitleStyle}>{questions ? _.size(questions) : 0 } cards </Text>
                </Body>
                <Right/>
            </CardItem>
            <CardItem >
              <Left>
                { onPressLike
                    ?(
                        <Button transparent  onPress={() => onPressLike({ deckId, uid })}>
                            <Icon active name="thumbs-up" />
                            <Text>{likes ? _.size(likes) : 0}</Text>
                        </Button>
                    )
                    :(
                        <Button disabled transparent>
                            <Icon active name="thumbs-up" />
                            <Text>{likes ? _.size(likes) : 0}</Text>
                        </Button>
                    )
                }
              </Left>
            </CardItem>
          </Card>
    )
}
export default Deck