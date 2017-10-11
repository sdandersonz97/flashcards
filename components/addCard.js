import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView } from 'react-native'
import { addCard as addCardAction } from '../actions'
import { addCardToDeck, fetchDeck } from '../utils/api'
import { connect } from 'react-redux'
import { primary, white } from '../styles/colors'
import { fontStyles } from '../styles/fonts' 
import { Card, CardSection, Button, TextInput } from '../common'

class AddCard extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deckTitle } = navigation.state.params
        return {
            title: `Add card to ${deckTitle} deck`,
            headerTitleStyle:{
                color: white
            }
        }
    }
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
        const { addCardAction, navigation } = this.props

        if(question){
            fetchDeck(deckTitle).then(({questions}) => {
                addCardToDeck({deckTitle, questions, question, answer})
                addCardAction(deckTitle, {
                    question,
                    answer
                })
            })
            this.setState(() => ({
                question: '',
                answer: '' 
            }))
            navigation.goBack()
        } else {
            alert('The question field can not be empty.')
        }
    }
    render(){
        const { question, answer } = this.state
        const { titleStyle, subtitleStyle } = fontStyles
        return(
            <Card style={{flex:1}}>
                <Text style={titleStyle}> Question </Text>
                <TextInput 
                    value={question} 
                    onChangeText={this.onQuestionChange} 
                    placeholder="What's your name"
                />    
                <Text style={titleStyle}> Answer </Text>
                <TextInput 
                    value={answer} 
                    onChangeText={this.onAnswerChange}
                    placeholder="Steven"
                />       
                <Button 
                    text="ADD CARD" 
                    onPress={this.onSubmit} 
                    style={{backgroundColor:primary, margin:30}}  
                /> 
            </Card>
            
        )
    }
}

export default connect(null,{ addCardAction })(AddCard)