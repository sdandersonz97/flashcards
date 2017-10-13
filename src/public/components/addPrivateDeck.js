import React, { Component } from 'react'
import { Text, Switch, View } from 'react-native'
import { connect } from 'react-redux'
import { setLocalNotification, clearLocalNotification } from '../../utils/helpers'
import { Card, CardSection, Button, TextInput } from '../../common'
import { primary } from '../../styles/colors'
import { fontStyles, containersStyles } from '../../styles' 
import { addUserDeck, addPublicDeck } from '../actions'
class AddPrivateDeck extends Component {
    state = {
        deckTitle: '',
        isDeckPublic:false
    }
    handleTextChange = (deckTitle) => {
        this.setState(() => ({
            deckTitle
        }))
    }
    submit = () => {
        const { deckTitle, isDeckPublic } = this.state
        this.props.addUserDeck(deckTitle, isDeckPublic)
        this.setState({ deckTitle: '' })
    }
    handleToggleSwitch = () => {
        this.setState({
            isDeckPublic: !this.state.isDeckPublic
        })
    }

    render(){
        const { deckTitle, isDeckPublic } = this.state
        const { titleStyle, subtitleStyle } = fontStyles
        console.log(isDeckPublic)
        return(   
            <Card style={{flex:1}}>
               
                <Text style={titleStyle}> Add a title for your deck! </Text> 
                    <TextInput
                        value={deckTitle}
                        onChangeText={this.handleTextChange}
                        style={{ margin:40 }}
                        placeholder="React"
                    /> 
                    <Text> Share </Text>
                    <Switch value={isDeckPublic} onValueChange={this.handleToggleSwitch}/>
                    <Button 
                        onPress={this.submit} 
                        text="ADD DECK" 
                        style={{backgroundColor:primary}}
                    />
            </Card>
        )
    }
}

export default connect(null, { addUserDeck, addPublicDeck })(AddPrivateDeck)