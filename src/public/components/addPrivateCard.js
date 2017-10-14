import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { primary, white } from '../../styles/colors'
import { fontStyles, containersStyles } from '../../styles' 
import { Button, TextArea, ModalText } from '../../common'
import { Input, Form, Item, Label } from 'native-base'
import { addUserCardToDeck } from '../actions'
class AddPrivateCard extends Component {
    state = {
        question: "",
        answer: "",
        questionOpen: false,
        answerOpen: false
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
    cancelQuestionOpen = () =>{
        this.setState({
            questionOpen: false
        })
    }
    openQuestion = () => {
        this.setState({
            questionOpen: true
        })    
    }
    cancelAnswerOpen = () =>{
        this.setState({
            answerOpen: false
        })
    }
    openAnswer = () => {
        this.setState({
            answerOpen: true
        })    
    }
    onSubmit = () => {
        const { question, answer } = this.state
        const { key } = this.props.navigation.state.params
        const { navigation, addUserCardToDeck } = this.props

        if(question && answer){
            addUserCardToDeck(key, { question, answer })
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
        const { question, answer, questionOpen, answerOpen } = this.state
        const { titleStyle, subtitleStyle } = fontStyles
        return(
            <Form style={containersStyles.formContainer}>
                <Item inlineLabel onPress={() => this.openQuestion() }>
                    <Label>Question</Label>
                    <Input
                        value={question} 
                        onChangeText={this.onQuestionChange} 
                        onFocus={()=>this.openQuestion()}
                    />
                </Item>
                <Item onPress={() => this.openAnswer() }>
                    <Label>Answer</Label>
                    <Input
                        value={answer} 
                        onChangeText={this.onAnswerChange}
                        onFocus={() => this.openAnswer()}
                    />
                </Item>
                <Button 
                    onPress={this.onSubmit} 
                    style={{backgroundColor:primary, margin:30}}  
                >
                    Save Card
                </Button>
                <ModalText
                    visible={questionOpen}
                    onCancel={this.cancelQuestionOpen}
                >
                    <TextArea
                        onChangeText={this.onQuestionChange}
                        value={question}
                        placeholder="Write the question"
                        multiline = {true}
                        numberOfLines = {4}
                    />
                </ModalText>
                <ModalText
                    visible={answerOpen}
                    onCancel={this.cancelAnswerOpen}
                >
                    <TextArea
                        placeholder="Write the answer"
                        onChangeText={this.onAnswerChange}
                        value={answer}
                        multiline = {true}
                        numberOfLines = {4}
                    />
                </ModalText>
                
            </Form>
            
        )
    }
}

export default connect(null, { addUserCardToDeck })(AddPrivateCard)