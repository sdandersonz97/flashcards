import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, FlatList, AsyncStorage } from 'react-native'
import { fetchDecks, fetchDeck } from '../helpers/api' 
import { titleStyle, subtitleStyle } from '../styles/fonts' 
import { blue, gray } from '../styles/colors'
import { recieveDecks } from '../actions'
import { AppLoading } from 'expo'
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
        const{ deckTitle } = item
        return <Deck onClickNavigate={() => this.props.navigation.navigate('DeckShow',{ deckTitle })} { ...item } />
    }
    render(){
        const { ready } = this.state
        const { decks } = this.props
        if(ready === false){
            return <AppLoading />
        }
        return decks.length > 0
            ?  <FlatList
                    data={decks}
                    renderItem={this.renderDeck}
                />
            :   <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
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