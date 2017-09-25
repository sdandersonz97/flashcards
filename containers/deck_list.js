import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, FlatList } from 'react-native'
import { fetchDecks } from '../helpers/api' 
import { blue, gray } from '../helpers/colors'
import { recieveDecks } from '../actions'
import { AppLoading } from 'expo'
import Deck from '../components/deck'
import glamorous from 'glamorous-native'


const NoAvailable = glamorous.text({
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 30,
        marginRight: 30,
        fontSize: 30
})
class DeckList extends Component {
    
    state = {
        ready: false
    }
    componentDidMount(){
        const { recieveDecks } = this.props
        fetchDecks()
            .then(decks => recieveDecks(decks))
            .then(() => this.setState(() => ({
                ready: true
            })))
    }
    renderDeck = ({ item }) => {
        const{deckTitle}=item
        return <Deck onClickNavigate={()=>this.props.navigation.navigate('DeckShow',{ deckTitle })} { ...item } />
    }
    render(){
        const { ready } = this.state
        const { decks } = this.props
        if(ready === false){
            return <AppLoading />
        }
        return(
            <View>
                { decks.length > 0
                    ?  <FlatList
                            data={decks}
                            renderItem={this.renderDeck}
                        />
                    :   <NoAvailable>
                            No decks available
                        </NoAvailable>
                }
            </View>
        )
    }
}
function mapStateToProps(state){
    return {
        decks: Object.keys(state).map(deck => state[deck])
    }
}
export default connect(mapStateToProps,{ recieveDecks })(DeckList)