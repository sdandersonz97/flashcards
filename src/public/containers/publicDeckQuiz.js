import _ from 'lodash'
import React, { Component } from 'react'
import { View, Dimensions, Image } from 'react-native'
import { Container, Content, DeckSwiper, Card, CardItem, Right, Left, Body, Text } from 'native-base'
import { Button } from '../../common'
import { connect } from 'react-redux'
import { white, primary } from '../../styles/colors'
import { fontStyles, containersStyles } from '../../styles' 
import QuizEmpty from '../components/quizEmpty'
import SwipeCard from '../components/swipeCard'

class PrivateDeckQuiz extends Component {
    state = {
        view:'question',
        index: 0,
        corrects: 0,
        incorrects: 0,
    }
    onPressChangeView = () => {
        this.setState( state => ({
            view: state.view === 'question' ? 'answer' : 'question'
        }))
    }
    onReset = () =>{
        this.setState({
            corrects:0,
            incorrects:0,
            index:0
        })
    }
    onSwipeRight = () => {
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
    onPressGoBack = () => {
        this.props.navigation.goBack()
    }
    render(){
        const { deck, navigation, questions } = this.props
        const { key } = navigation.state.params
        const { index, view, corrects, incorrects } = this.state
        const { titleStyle, subtitleStyle } = fontStyles
        const deckSize = _.size(questions)
        return  deckSize > 0 
                ? <Image style={containersStyles.imageBackground} source={require('../img/card3.jpg')}>
                    <DeckSwiper
                    dataSource={questions}
                    onSwipeLeft={this.onSwipeLeft}
                    onSwipeRight={this.onSwipeRight}  
                    renderItem={question => index < deckSize 
                        ? <SwipeCard
                            index={index}
                            view={view}
                            question={question.question}
                            answer={question.answer}
                            onPressChangeView={this.onPressChangeView}
                            deckSize={deckSize}/>
                        : <QuizEmpty 
                            deckTitle={deck.deckTitle}
                            corrects={corrects}
                            onReset={this.onReset}
                            onNavigate={this.onPressGoBack}
                            deckSize={deckSize}/>
                    }
                />
                </Image>
                : <Image style={containersStyles.imageBackground} source={require('../img/card3.jpg')}>
                    <Card>
                        <CardItem header>
                            <Text style={titleStyle}>You don't have cards in this deck, please add some cards first. </Text>   
                        </CardItem>
                        <CardItem>
                            <Left/>
                            <Body>
                                <Button 
                                    onPress={()=>this.props.navigation.navigate('AddCard', { key })}    
                                > 
                                    Add Card
                                </Button> 
                            </Body>
                            <Right/>
                        </CardItem>
                    </Card>
                </Image>
    }
}
function mapStateToProps({ publicDecks }, { navigation }){
    const { key } = navigation.state.params
    return{
        deck: publicDecks[key],
        questions: publicDecks[key].questions 
            ? Object.keys(publicDecks[key].questions).map(question => publicDecks[key].questions[question])
            : [] 
    }
}
export default connect(mapStateToProps)(PrivateDeckQuiz)