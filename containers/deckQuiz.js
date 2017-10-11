import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { DeckSwiper } from 'native-base'
import { Card, Button } from '../common'
import { connect } from 'react-redux'
import { white, primary } from '../styles/colors'
import { fontStyles } from '../styles/fonts' 

const dim = Dimensions.get("window")
class DeckQuiz extends Component {
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
   
    onSwipeRight = () => {
        const { opacity, width, height } = this.state
        this.setState(state => ({
            index: state.index + 1,
            corrects: state.corrects + 1,
        })) 
    }
    onSwipeLeft = () => {
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
        const { titleStyle, subtitleStyle } = fontStyles
        return(
            <View>
                <DeckSwiper
                    onSwipeLeft={this.onSwipeLeft}
                    onSwipeRight={this.onSwipeRight}
                    dataSource={deck.questions}
                    renderItem={deck.questions.length > index ? question => (
                        <Card style={{ flex:1, height: dim.height-100 }}>
                            <View style={{ margin: 10 }}>
                                <Text 
                                    style={subtitleStyle}
                                >
                                    { view === 'question' ? question.question : question.answer }
                                </Text>
                            </View>
                            
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
                                style={subtitleStyle}
                            >
                                {`${index+1}/${deck.questions.length}`}
                            </Text> 
                            <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15  }} >
                                <Text style={{fontSize:10}}>
                                    Swipe Left for incorrect
                                </Text>
                                <Text style={{fontSize:10}}>
                                    Swipe Right for correct
                                </Text>
                            </View>                        
                        </Card>)
                        : () => (
                            <Card style={{flex:1, height: dim.height-100}}>
                                <Text style={titleStyle}> You have finished the {deck.deckTitle} Quiz </Text>
                                <Text style={subtitleStyle}> You have answer {corrects} questions correctly of {deck.questions.length}  Quiz </Text>
                                <Button 
                                    text="Go to deck"
                                    style={{backgroundColor: primary, margin: 10}}
                                    onPress={()=>this.props.navigation.goBack()}
                                    
                                />
                                <Button 
                                    text="Start again"
                                    style={{backgroundColor: primary, margin: 10}}
                                    onPress={()=>this.setState({index:0, corrects:0, incorrects: 0})}
                                    
                                />
                            </Card>)
                    }
                renderEmpty={() => (
                        <Card style={{height: dim.height-100}}>
                            <View style={{margin:20, justifyContent:'center', alignItems:'center'}}>
                                <Text style={titleStyle}>You don't have cards in this deck, please add some cards first. </Text>
                                <Button 
                                    text="Add Card"
                                    style={{backgroundColor: primary, margin: 10}}
                                    onPress={()=>this.props.navigation.navigate('AddCard', {deckTitle:deck.deckTitle})}    
                                />
                            </View>
                        </Card>)}  
                />
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
export default connect(mapStateToProps)(DeckQuiz)