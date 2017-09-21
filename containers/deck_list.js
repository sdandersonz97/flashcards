import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

class DeckList extends Component {
    render(){
        return(
            <View>
                <Text>
                    Deck Lists
                </Text>
            </View>
        )
    }
}

export default connect()(DeckList)