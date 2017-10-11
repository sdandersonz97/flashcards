import React, { Component } from 'react'
import { Card, CardSection, TextInput, Button,  } from '../../common'
import { Text, StyleSheet } from 'react-native'
import { loginUser } from '../actions'
import { connect } from 'react-redux'
import { appLoading } from 'expo'
class LoginForm extends Component {
    state={
        email: '',
        password: ''
    }
    onEmailChange = email => this.setState({ email })

    onPasswordChange = password => this.setState({ password })

    onButtonPress = () => {
        const { loginUser, navigation } = this.props
        const { email, password } = this.state
        loginUser({ email, password }, () => navigation.navigate(
            'PrivateDecks'
        ))
    }
    renderButton = () => {
        return !this.props.loading 
            ?   <Button onPress={this.onButtonPress.bind(this)} text='Login'/>
            :   <appLoading />
    }
    render() {
        return(
            <Card>
                <CardSection>
                    <TextInput 
                        label="Email" 
                        placeholder="email@somenthing.com"
                        onChangeText={this.onEmailChange}
                        value={this.state.email}
                    />
                </CardSection>
                <CardSection>
                    <TextInput 
                        label="Password" 
                        secureTextEntry 
                        placeholder="password"
                        onChangeText={this.onPasswordChange}
                        value={this.state.password}
                    />
                </CardSection>
                <Text style={styles.errorStyled}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    errorStyled:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})
const mapStateToProps = ({auth}) => {
    const { email, password, error, loading } = auth
    return {
        email,
        password,
        error,
        loading
    }
}
export default connect(mapStateToProps, { loginUser })(LoginForm)