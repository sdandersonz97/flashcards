import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { setLocalNotification, clearLocalNotification } from '../../utils/helpers'
import { Card, CardSection, Button, TextInput } from '../../common'
import { primary } from '../../styles/colors'
import { fontStyles } from '../../styles' 
import { addUserDeck } from '../actions'
class AddPrivateDeck extends Component {
    state = {
        deckTitle: '',
    }
    handleTextChange = (deckTitle) => {
        this.setState(() => ({
            deckTitle
        }))
    }
    submit = () => {
        this.props.addUserDeck(this.state.deckTitle)
        this.setState({ deckTitle: '' })
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

export default connect(null, { addUserDeck })(AddPrivateDeck)