import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { deleteDeck } from '../actions'
import { connect } from 'react-redux'
import { primary, white, red, green } from '../styles/colors'
import { fontStyles } from '../styles/fonts' 
import { removeDeck } from '../helpers/api'
import { Card, CardSection, Button, Confirm } from '../components/common'

class DeckShow extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deckTitle } = navigation.state.params
        return {
            title: `${deckTitle} deck`,
            headerTitleStyle:{
                color: white
            }
        }
    }
    state={
        showConfirm: false
    }
    onPressShowConfirm = () => { this.setState({showConfirm: true}) }
    onAccept = () => {
        const { navigation, deleteDeck } = this.props
        deleteDeck(navigation.state.params.deckTitle, () => navigation.goBack())
        removeDeck(navigation.state.params.deckTitle) 
        
    }
    shouldComponentUpdate(nextProps){
        return nextProps.deck ? true : false
    }
    onDecline = () => { this.setState({ showConfirm:false }) }
    render(){
        const { navigation } = this.props
        const { deckTitle, questions } = this.props.deck 
        const { titleStyle, subtitleStyle } = fontStyles
        return(
                <Card style={{flex:1}}>
                    <CardSection>
                        <Text 
                            style={titleStyle}
                        >
                            {deckTitle} 
                        </Text>
                        <Text 
                            style={subtitleStyle}
                        > 
                            { questions.length } Cards 
                        </Text> 
                    </CardSection>
                    <CardSection>
                        <Button 
                            onPress={() => navigation.navigate('AddCard',{ deckTitle })} 
                            style={{ backgroundColor: primary, margin: 10}} 
                            text="ADD CARD"
                        /> 
                        <Button 
                            onPress={() => navigation.navigate('DeckQuiz',{ deckTitle })} 
                            style={{ backgroundColor: green,  margin: 10}} 
                            text="START QUIZ" 
                        />
                        <Button 
                            onPress={this.onPressShowConfirm.bind(this)} 
                            style={{ backgroundColor: red,  margin: 10}} 
                            text="DELETE QUIZ" 
                        />
                        <Confirm
                            visible={this.state.showConfirm}
                            onAccept={this.onAccept}
                            onDecline={this.onDecline}
                        >
                            Are you sure you want to delete this deck?
                        </Confirm>
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
export default connect(mapStateToProps,{ deleteDeck })(DeckShow)