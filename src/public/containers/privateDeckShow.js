import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { primary, white, red, green } from '../../styles/colors'
import { fontStyles } from '../../styles/fonts' 
import { Card, CardSection, Button, Confirm } from '../../common'

class PrivateDeckShow extends Component {

    state = { showConfirm: false }

    onPressShowConfirm = () => { this.setState({ showConfirm: true })}

    onAccept = () => {
        const { navigation } = this.props
    }
    shouldComponentUpdate(nextProps){
        return nextProps.deck ? true : false
    }
    onDecline = () => { this.setState({ showConfirm:false })}
    render(){
        const { navigation } = this.props
        const { deckTitle, questions, key } = this.props.deck 
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
                            { questions ? questions.length : 0 } Cards 
                        </Text> 
                    </CardSection>
                    <CardSection>
                        <Button 
                            onPress={() => navigation.navigate('AddPrivateCard',{ key })} 
                            style={{ backgroundColor: primary, margin: 10}} 
                            text="ADD CARD"
                        /> 
                        <Button 
                            onPress={() => navigation.navigate('PrivateDeckQuiz',{ key })} 
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
function mapStateToProps({ privateDecks }, { navigation }){
    const { key } = navigation.state.params
    return{
        deck: privateDecks[key]
    }
}
export default connect(mapStateToProps)(PrivateDeckShow)