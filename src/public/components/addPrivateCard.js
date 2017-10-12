import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { primary, white } from '../../styles/colors'
import { fontStyles } from '../../styles/fonts' 
import { Card, CardSection, Button, TextInput } from '../../common'
import { addUserCardToDeck } from '../actions'
class AddPrivateCard extends Component {
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

export default connect(null, { addUserCardToDeck })(AddPrivateCard)