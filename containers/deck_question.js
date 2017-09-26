import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Button from '../components/add_button'
import { connect } from 'react-redux'
import { blue, purple } from '../helpers/colors'
class DeckQuestion extends Component {
    render(){
        return(
            <View>
                <Text>Deck Question</Text>
                <Button color={blue} text="Yes"/>
                <Button color={purple} text="No"/>
            </View>
        )
    }
}
export default DeckQuestion