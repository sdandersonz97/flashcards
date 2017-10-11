import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { addDeck as addDeckAction } from '../actions'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'
import { addDeck } from '../utils/api'
import { Card, CardSection, Button, TextInput } from '../components/common'
import { primary } from '../styles/colors'
import { fontStyles } from '../styles' 

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
        if(deckTitle){
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
        } else {
            alert('Please add a name to the deck')
        }
        

    }
    render(){
        const { deckTitle } = this.state
        const { titleStyle, subtitleStyle } = fontStyles
        return(   
            <Card style={{flex:1}}>
                <Text style={titleStyle}> Add a title for your deck! </Text> 
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

styles={
    container:{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    }
}
export default connect(null,{ addDeckAction })(AddDeck)