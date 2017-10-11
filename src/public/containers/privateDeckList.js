import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import { AppLoading } from 'expo'
import { fontStyles, containersStyles } from '../../styles' 
import { Deck } from '../../common'
class privateDecksList extends Component {
    state = {
        ready: false
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

const mapStateToProps = ({privateDecks}) => {
    return { decks: privateDecks }
}
export default connect(mapStateToProps)(privateDecksList)