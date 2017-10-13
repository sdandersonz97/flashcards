import React, { Component } from 'react'
import { Text, Switch, View } from 'react-native'
import { connect } from 'react-redux'
import { setLocalNotification, clearLocalNotification } from '../../utils/helpers'
import { Card, CardSection, Button, TextInput } from '../../common'
import CategoryPicker from './categoryPicker'
import { primary } from '../../styles/colors'
import { fontStyles, containersStyles } from '../../styles' 
import { addUserDeck, addPublicDeck } from '../actions'
class AddPrivateDeck extends Component {
    state = {
        deckTitle: '',
        isDeckPublic:false,
        category: 'selectCategory'
    }
    handleTextChange = (deckTitle) => {
        this.setState(() => ({
            deckTitle
        }))
    }
    handlePickerChange = category => {
        this.setState({
            category
        })
    }
    submit = () => {
        const { deckTitle, isDeckPublic, category } = this.state
        if(deckTitle && category !== 'selectCategory'){
            this.props.addUserDeck(deckTitle, isDeckPublic, category) 
            this.setState({ deckTitle: '', category: 'selectCategory' })
        } else {
           deckTitle 
           ? alert('Please select a category')
           : alert('Please introduce a title for your deck')
        }
         
    }
    handleToggleSwitch = () => {
        this.setState({
            isDeckPublic: !this.state.isDeckPublic
        })
    }

    render(){
        const { deckTitle, isDeckPublic, category } = this.state
        const { titleStyle, subtitleStyle } = fontStyles
        console.log(category)
        return(   
            <Card style={{flex:1}}>
                <Text style={titleStyle}> Add a title for your deck! </Text> 
                    <TextInput
                        value={deckTitle}
                        onChangeText={this.handleTextChange}
                        style={{ margin:40 }}
                        placeholder="React"
                    /> 
                    
                    <CategoryPicker value={category} onValueChange={this.handlePickerChange}/>
                    
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