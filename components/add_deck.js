import React, { Component } from 'react'
import { Text } from 'react-native'
import glamorous from 'glamorous-native'
import { blue } from '../helpers/colors'
import { addDeck as addDeckAction } from '../actions'
import { addDeck } from '../helpers/api'
import AddButton from './add_button'
import TextInput  from './text_input'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
const Container = glamorous.view({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ecf0f1'
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

    }
    render(){
        const { deckTitle } = this.state
        return(
            <Container>
                <Text style={{fontSize:20}}> Title: </Text>
                <TextInput
                    value={deckTitle}
                    onChangeText={this.handleTextChange}
                />
                <AddButton onPress={this.submit} text="ADD DECK" color={blue}/>
            </Container>
        )
    }
}
export default connect(null,{ addDeckAction })(AddDeck)