import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import { fontStyles, containersStyles } from '../../styles' 
import { Deck, Spinner } from '../../common'
import { fetchUserDecks, sharePrivateDeck } from '../actions'
import { navigationHeaderRight } from '../../utils/helpers' 


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
            action: () => navigate('AddPrivateCard')
        }, 
        {
            name:"Start Quiz",
            action: () => navigate('PrivateDeckQuiz')
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

const mapStateToProps = ({ privateDecks }) => {
    return { decks: Object.keys(privateDecks).map(deck => privateDecks[deck]) }
}
export default connect(mapStateToProps, { fetchUserDecks, sharePrivateDeck })(privateDecksList)