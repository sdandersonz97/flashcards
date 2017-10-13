import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import { fontStyles, containersStyles } from '../../styles' 
import { Deck, Spinner } from '../../common'
import { fetchUserDecks } from '../actions'
import { navigationHeaderRight } from '../../utils/helpers' 
class privateDecksList extends Component {
    static navigationOptions = ({ navigation }) => {
        return navigationHeaderRight(navigation)
    }
    componentDidMount(){
        this.props.fetchUserDecks()
    }
    renderDeck = ({ item }) => {
        const { key } = item
        const { navigate } = this.props.navigation
        return <Deck onClickNavigate={(screen) => navigate(screen,{ key })} { ...item } />
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
export default connect(mapStateToProps, { fetchUserDecks })(privateDecksList)