import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import AddButton from '../components/add_button'
import { blue } from '../helpers/colors'
class DeckShow extends Component {
    render(){
        const { navigation } = this.props
        const { deckTitle, questions } = this.props.deck 
        return(
            <View>
                <View>
                    <Text style={{fontSize:20, textAlign:'center', margin:20 }}>{deckTitle} </Text>
                    <Text style={{fontSize:15, textAlign:'center'}}> { questions.length } Cards </Text> 
                </View>
                <View>
                    <AddButton onPress={()=>navigation.navigate('AddCard',{ deckTitle })} color={blue} text="ADD QUESTION"/>
                    <AddButton color={blue} onPress={()=>navigation.navigate('DeckQuestion',{ deckTitle })} text="BEGIN QUIZ" />
                </View>
            </View>
        )
    }
}
function mapStateToProps(state,{ navigation }){
    const { deckTitle } = navigation.state.params
    return{
        deck: state[deckTitle]
    }
}
export default connect(mapStateToProps)(DeckShow)