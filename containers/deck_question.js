import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import { Card, CardSection, Button } from '../components/common'
import { connect } from 'react-redux'
import { correct, incorrect, white } from '../helpers/colors'
import CardAnimatedSlide from '../components/card_animated_slide'
class DeckQuestion extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deckTitle } = navigation.state.params
        return {
            title: `${deckTitle} Quiz`,
            headerTitleStyle:{
                color: white
            }
        }
    }
    state = {
        view:'question',
        index: 0,
        corrects: 0,
        incorrects: 0,
    }
   
    onPressIncrementCorrects = () => {
        const { opacity, width, height } = this.state
        this.setState(state => ({
            index: state.index + 1,
            corrects: state.corrects + 1,
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
        const { deck, navigation } = this.props
        const { index, view, corrects, incorrects } = this.state
        return(
            <View style={{flex:1}}>
                <CardAnimatedSlide  index={index}> 
                    {index+1 <= deck.questions.length  
                        ?   <View>
                                <Text 
                                    style={{fontSize:25, alignSelf:'center'}}
                                >
                                    { view === 'question' ? deck.questions[index].question : deck.questions[index].answer }
                                </Text>
                                <Button 
                                    onPress={this.onPressIncrementCorrects} 
                                    style={{backgroundColor: correct, margin: 10}} 
                                    text="Correct"
                                />
                                <Button 
                                    onPress={this.onPressIncrementIncorrects} 
                                    style={{backgroundColor: incorrect, margin: 10}} 
                                    text="Incorrect"
                                />
                                {view === 'question' 
                                ?   <Button 
                                        onPress={this.onPressChangeView} 
                                        text="View Answer"
                                    />
                                :   <Button 
                                        onPress={this.onPressChangeView} 
                                        text="View Question"
                                    />
                                } 
                                <Text 
                                    style={{fontSize:15, alignSelf:'center'}}
                                >
                                    {`${index+1}/${deck.questions.length}`}
                                </Text>
                            </View>
                        :   <View>
                                <Text style={{fontSize:18, alignSelf:'center'}}> You Finished the quiz {deck.deckTitle} </Text>
                                <Text style={{fontSize:12, alignSelf:'center'}}> Number of correct answer {corrects} of {deck.questions.length} in the {deck.deckTitle} quiz </Text>
                                <Button 
                                    text="Back to home"
                                    onPress={()=>this.props.navigation.goBack()}    
                                />
                            </View>
                    }
                    </CardAnimatedSlide>
                    </View>
        )
    }
}
function mapStateToProps(state, { navigation }){
    const { deckTitle } = navigation.state.params
    return{
        deck: state[deckTitle]
    }
}
export default connect(mapStateToProps)(DeckQuestion)