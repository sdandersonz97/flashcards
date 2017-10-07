import React, { Component } from 'react'
import { Text } from 'react-native'
import glamorous from 'glamorous-native'
import { primary } from '../helpers/colors'
import { addDeck as addDeckAction } from '../actions'
import { addDeck } from '../helpers/api'
import Button from './button'
import TextInput  from './text_input'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Card, CardSection } from '../components/common'
import { setLocalNotification, clearLocalNotification } from '../helpers/helpers'
const Container = glamorous.view({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
})

class AddDeck extends Component {
    state = {
        deckTitle: '',
    }
    handleTextChange = (deckTitle) => {
        this.setState(() => ({
            deckTitle
        }))
    }
    submit = () => {
        const { deckTitle } = this.state
        const { addDeckAction, navigation } = this.props
        addDeck(deckTitle)
        addDeckAction({
            [deckTitle]:{
                deckTitle,
                key:deckTitle,
                questions:[]
            }
        })
        this.setState(() => ({
            deckTitle:''
        }))
        navigation.navigate('DeckShow',{ deckTitle })

        clearLocalNotification()
        .then(setLocalNotification)

    }
    render(){
        const { deckTitle } = this.state
        return(
            <Card style={{flex:1}}>
                <Text style={{ fontSize:28 }}> Add a title for your deck! </Text>
                <TextInput
                    value={deckTitle}
                    onChangeText={this.handleTextChange}
                    style={{ margin:40 }}
                    placeholder="React"
                /> 
                <Button 
                    onPress={this.submit} 
                    text="ADD DECK" 
                    style={{backgroundColor:primary}}
                />
            </Card>
        )
    }
}
export default connect(null,{ addDeckAction })(AddDeck)