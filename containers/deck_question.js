import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Button from '../components/add_button'
import { connect } from 'react-redux'
import { blue, purple } from '../helpers/colors'
class DeckQuestion extends Component {
    state = {
        view:'question',
        index: 0,
        corrects: 0,
        incorrects: 0,
    }
    onPressIncrementCorrects = () => {
        this.setState(state => ({
            index: state.index + 1,
            corrects: state.corrects + 1
        }))
    }
    onPressIncrementIncorrects = () => {
        this.setState(state => ({
            index: state.index + 1,
            incorrects: state.incorrects + 1
        }))
    }
    onPressChangeView = () => {
        this.setState( state => ({
            view: state.view === 'question' ? 'answer' : 'question'
        }))
    }
    render(){
        const { deck } = this.props
        const { index, view, corrects, incorrects } = this.state
        return(
            <View> 
                {index+1 <= deck.questions.length 
                    ? view === 'question' 
                        ?   <View>
                                <Text>{`${index+1}/${deck.questions.length}`}</Text>
                                <Text>{deck.questions[index].question}</Text>
                                <Button onPress={this.onPressIncrementCorrects} color={blue} text="Correct"/>
                                <Button onPress={this.onPressIncrementIncorrects} color={purple} text="Incorrect"/>
                                <Button onPress={this.onPressChangeView} text="View Answer"/>
                            </View>
                        :   <View>
                                <Text>{`${index+1}/${deck.questions.length}`}</Text>
                                <Text>{deck.questions[index].answer}</Text>
                                <Button onPress={this.onPressIncrementCorrects} color={blue} text="Correct"/>
                                <Button onPress={this.onPressIncrementIncorrects} color={purple} text="Incorrect"/>
                                <Button onPress={this.onPressChangeView} text="View Question"/>
                            </View>
                    :   <View>
                            <Text>You Finished the quiz {deck.deckTitle}</Text>
                            <Text>You have responded correctly {corrects} questions of {deck.questions.length} in the {deck.deckTitle} quiz </Text>
                            <Button text="Back to home"/>
                        </View>
                }  
            </View>
        )
    }
}
function mapStateToProps(state,{ navigation }){
    const { deckTitle } = navigation.state.params
    return{
        deck: state[deckTitle]
    }
}
export default connect(mapStateToProps)(DeckQuestion)