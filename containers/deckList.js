import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, FlatList, AsyncStorage } from 'react-native'
import { fetchDecks, fetchDeck } from '../helpers/api' 
import { blue, gray } from '../styles/colors'
import { recieveDecks } from '../actions'
import { AppLoading } from 'expo'
import { containersStyles, fontStyles } from  '../styles'
import Deck from '../components/deck'

class DeckList extends Component {
    state = {
        ready: false
    }
    componentDidMount(){
        const { recieveDecks } = this.props
        fetchDecks()
            .then(res => recieveDecks(res))
        this.setState({ ready:true })
    }
    renderDeck = ({ item }) => {
        const { deckTitle } = item
        const { navigate } = this.props.navigation
        return <Deck onClickNavigate={() => navigate('DeckShow',{ deckTitle })} { ...item } />
    }
    render(){
        const { ready } = this.state
        const { decks } = this.props
        const { titleStyle, subtitleStyle } = fontStyles

        if(ready === false){
            return <AppLoading />
        }
        return decks.length > 0
            ?  <FlatList
                    data={decks}
                    renderItem={this.renderDeck}
                />
            :   <View style={containersStyles.containerView}>
                    <Text style={titleStyle}> No decks available </Text>
                    <Text style={subtitleStyle}> add some decks to get started! </Text>
                </View>
        }
}
function mapStateToProps(state){
    return {
        decks: Object.keys(state).map(deck => state[deck])
    }
}
export default connect(mapStateToProps,{ recieveDecks })(DeckList)