import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import { AppLoading } from 'expo'
import { fontStyles, containersStyles } from '../../styles' 
import { Spinner, Card } from 'native-base'
import { fetchUserDecks, sharePrivateDeck } from '../actions'
import { navigationHeaderRight } from '../../utils/helpers' 
import Deck from '../components/deck'

class privateDecksList extends Component {
    static navigationOptions = ({ navigation }) => {
        return navigationHeaderRight(navigation)
    }
    componentDidMount(){
        this.props.fetchUserDecks()
    }
    renderDeck = ({ item }) => {
        const { key, isDeckPublic } = item
        const { navigate } = this.props.navigation
        const buttons = [{
            name:"New card",
            action: () => navigate('AddPrivateCard',{ key })
        }, 
        {
            name:"Start Quiz",
            action: () => navigate('PrivateDeckQuiz', { key })
        },
        {
            name:"Delete",
            action: () => {}
        }]
        !isDeckPublic && buttons.push({
            name:"Share",
            action: () => this.props.sharePrivateDeck(item)
        }) 
        return <Deck onClickNavigate={(screen) => navigate(screen,{ key })} actionSheet={buttons} { ...item } />
    }
    render(){
        const { decks } = this.props
        const { titleStyle, subtitleStyle } = fontStyles
        return !decks 
            ? <Spinner/>
            : decks.length > 0
                ?   <FlatList
                        data={decks}
                        renderItem={this.renderDeck}
                    />          
                :   <Card>
                        <Text style={titleStyle}> No decks available </Text>
                        <Text style={subtitleStyle}> add some decks to get started! </Text>
                    </Card>
        }
}

const mapStateToProps = ({ privateDecks }) => {
    return { decks: Object.keys(privateDecks).map(deck => privateDecks[deck]) }
}
export default connect(mapStateToProps, { fetchUserDecks, sharePrivateDeck })(privateDecksList)