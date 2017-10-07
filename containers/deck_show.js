import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Button from '../components/button'
import { primary } from '../helpers/colors'
import { Card, CardSection } from '../components/common'
class DeckShow extends Component {
    render(){
        const { navigation } = this.props
        const { deckTitle, questions } = this.props.deck 
        return(
                <Card style={{flex:1}}>
                    <CardSection>
                        <Text 
                            style={{fontSize:40, textAlign:'center', margin:20 }}
                        >
                            {deckTitle} 
                        </Text>
                        <Text 
                            style={{fontSize:20, textAlign:'center'}}
                        > 
                            { questions.length } Cards 
                        </Text> 
                    </CardSection>
                    <CardSection>
                        <Button 
                            onPress={()=>navigation.navigate('AddCard',{ deckTitle })} 
                            style={{ backgroundColor: primary, margin: 10}} 
                            text="ADD QUESTION"
                        /> 
                        <Button 
                            onPress={()=>navigation.navigate('DeckQuestion',{ deckTitle })} 
                            style={{ backgroundColor: primary,  margin: 10}} 
                            text="START QUIZ" 
                        /> 
                    </CardSection>
                        
                </Card>
            
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