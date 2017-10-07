import React, { Component } from 'react'
import TextInput from './text_input'
import Button from './button'
import { Text, View } from 'react-native'
import { addCard as addCardAction } from '../actions'
import { addCardToDeck, fetchDeck } from '../helpers/api'
import { connect } from 'react-redux'
import { primary } from '../helpers/colors'
import { Card, CardSection } from './common'
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
        fetchDeck(deckTitle).then(questions => {
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
    }
    render(){
        const { question, answer } = this.state
        return(
            <Card style={{flex:1}}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:25, margin:20}}> Question </Text>
                    <TextInput 
                        value={question} 
                        onChangeText={this.onQuestionChange} 
                        placeholder="What's your name"
                    />    
                    <Text style={{fontSize:25, margin:20}}> Answer </Text>
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
                </View>
            </Card>
        )
    }
}

export default connect(null,{ addCardAction })(AddCard)