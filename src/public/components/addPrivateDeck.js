import React, { Component } from 'react'
import { Text, Switch, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { setLocalNotification, clearLocalNotification } from '../../utils/helpers'
import CategoryPicker from './categoryPicker'
import { primary } from '../../styles/colors'
import { fontStyles, containersStyles } from '../../styles' 
import { addUserDeck, addPublicDeck } from '../actions'
import { Card, Input, Form, Item, Label, CardItem, Body, Left, Right, CheckBox } from 'native-base'
import { Button } from '../../common'
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
        return(
            <Image style={containersStyles.imageBackground} source={require('../img/card3.jpg')}>
            <Form style={containersStyles.formContainer}>
                <Item floatingLabel style={{margin:30}}>
                    <Label>Title</Label>
                    <Input
                        value={deckTitle}
                        onChangeText={this.handleTextChange}
                    />
                </Item> 
                <Item style={{borderBottomWidth:1, height:35,  margin:30}}>
                    <Label> public </Label>
                    <CheckBox value={isDeckPublic} onPress={this.handleToggleSwitch} checked={isDeckPublic}/>
                </Item>
                <Item style={{borderBottomWidth:1, margin:30}}>
                    <CategoryPicker value={category} onValueChange={this.handlePickerChange}/>
                </Item>
                <Button 
                    style={{margin:30}}
                    block
                    onPress={this.submit}>
                    Create deck 
                </Button>
            </Form>
            </Image>
        )
    }
}

export default connect(null, { addUserDeck, addPublicDeck })(AddPrivateDeck)