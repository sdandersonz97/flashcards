import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text } from 'react-native'
import { AppLoading } from 'expo'
import { fontStyles, containersStyles } from '../../styles' 
import { Deck, Spinner } from '../../common'
import { fetchPublicDecks } from '../actions'
import { navigationHeaderRight } from '../../utils/helpers'
class PublicDecksList extends Component {
    static navigationOptions = ({ navigation }) => {
        return navigationHeaderRight(navigation)
    }
    componentDidMount(){
        this.props.fetchPublicDecks()
    }
    renderDeck = ({ item }) => {
        const { key } = item
        const { navigate } = this.props.navigation
        return <Deck onClickNavigate={(screen) => navigate(screen,{ key })} { ...item } />
    }
    render(){
        const { decks } = this.props
        const { titleStyle, subtitleStyle } = fontStyles
        console.log(decks)
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