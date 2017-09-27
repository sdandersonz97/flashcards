import React, { Component } from 'react'
import TextInput from './text_input'
import AddButton from './add_button'
import { Text } from 'react-native'
import { addCard as addCardAction } from '../actions'
import { addCard } from '../helpers/api'
import { connect } from 'react-redux'
import { primary } from '../helpers/colors'
import glamorous from 'glamorous-native'
const ContainerView = glamorous.view({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ecf0f1'
})
class AddCard extends Component {
    state = {
        question: "",
        answer: "",
    }
    onQuestionChange = (question) =>{
        this.setState(() => ({
            question
        }))
    }
    onAnswerChange = (answer) => {
        this.setState(() => ({
            answer
        }))
    }
    onSubmit = () => {
        const { question, answer } = this.state
        const { deckTitle } = this.props.navigation.state.params
        const { addCardAction } = this.props
        const card = JSON.stringify(question,answer)
        addCard(deckTitle, card)
        addCardAction(deckTitle, {
            question,
            answer
        })
        this.setState(() => ({
            question: '',
            answer: '' 
        }))
    }
    render(){
        const { question, answer } = this.state
        return(
            <ContainerView>
                <Text style={{fontSize:15}}> Question </Text>
                <TextInput value={question} onChangeText={this.onQuestionChange} />
                <Text style={{fontSize:15}}> Answer </Text>
                <TextInput value={answer} onChangeText={this.onAnswerChange} />
                <AddButton text="ADD CARD" onPress={this.onSubmit} Style={{backgroundColor:primary}}/>
            </ContainerView>
        )
    }
}

export default connect(null,{ addCardAction })(AddCard)