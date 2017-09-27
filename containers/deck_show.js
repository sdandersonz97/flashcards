import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import AddButton from '../components/add_button'
import { primary } from '../helpers/colors'
class DeckShow extends Component {
    render(){
        const { navigation } = this.props
        const { deckTitle, questions } = this.props.deck 
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <Text style={{fontSize:40, textAlign:'center', margin:20 }}>{deckTitle} </Text>
                    <Text style={{fontSize:20, textAlign:'center'}}> { questions.length } Cards </Text> 
                </View>
                <View style={{flex:1}}>
                    <AddButton onPress={()=>navigation.navigate('AddCard',{ deckTitle })} style={{ backgroundColor: primary, margin: 10}} text="ADD QUESTION"/>
                    <AddButton onPress={()=>navigation.navigate('DeckQuestion',{ deckTitle })} style={{ backgroundColor: primary,  margin: 10}} text="START QUIZ" />
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