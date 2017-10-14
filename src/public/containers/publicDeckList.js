import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text } from 'react-native'
import { AppLoading } from 'expo'
import { Spinner } from 'native-base'
import { fontStyles, containersStyles } from '../../styles' 
import  Deck  from '../components/deck'
import { fetchPublicDecks } from '../actions'
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
            name:"Start Quiz",
            action: () => navigate('PrivateDeckQuiz',{ key })
        }]
        return <Deck onClickNavigate={(screen) => navigate(screen,{ key })} actionSheet={buttons} { ...item } />
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

const mapStateToProps = ({ publicDecks }) => {
    return { decks: Object.keys(publicDecks).map(deck => publicDecks[deck]) }
}
export default connect(mapStateToProps, { fetchPublicDecks })(PublicDecksList)