import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text, Image } from 'react-native'
import { AppLoading } from 'expo'
import { Spinner } from 'native-base'
import { fontStyles, containersStyles } from '../../styles' 
import  Deck  from '../components/deck'
import { fetchPublicDecks, likeDeck } from '../actions'
import { navigationHeaderRight } from '../../utils/helpers'
class PublicDecksList extends Component {
    static navigationOptions = ({ navigation }) => {
        return navigationHeaderRight(navigation)
    }
    componentDidMount(){
        const { category } = this.props.navigation.state.params
        this.props.fetchPublicDecks(category)
    }
    renderDeck = ({ item }) => {
        const { key } = item
        const { navigate } = this.props.navigation
        const buttons = [
        {
            name: "Start Quiz",
            action: () => navigate('PublicDeckQuiz',{ key })
        }]
        return <Deck 
                    onClickNavigate={(screen) => navigate(screen,{ key })} 
                    actionSheet={buttons} 
                    onPressLike={this.props.likeDeck}
                    deckId={key}
                    { ...item } 
                />
    }
    render(){
        const { decks } = this.props
        const { titleStyle, subtitleStyle } = fontStyles
        return !decks 
            ? <Spinner/>
            : <FlatList
                    data={decks}
                    renderItem={this.renderDeck}
            /> 
        }
}

const mapStateToProps = ({ publicDecks }, { navigation }) => {
    const { category } = navigation.state.params
    return { decks: Object.keys(publicDecks).map(deck => publicDecks[deck])
        .filter(deck => deck.category === category)
        .sort((a,b) => _.size(b.likes) - _.size(a.likes))}
}
export default connect(mapStateToProps, { fetchPublicDecks, likeDeck })(PublicDecksList)