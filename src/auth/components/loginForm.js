import React, { Component } from 'react'
import { Card, CardSection, TextInput, Button,  } from '../../common'
import { Text, StyleSheet } from 'react-native'
import { loginUser } from '../actions'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
class LoginForm extends Component {
    state={
        email: '',
        password: ''
    }
    onEmailChange = email => this.setState({ email })

    onPasswordChange = password => this.setState({ password })

    onPublicSignIn = () => {
        const { loginUser, navigation } = this.props
        const { email, password } = this.state
        email && password
        ? loginUser({ email, password }, () => navigation.navigate('Public'))
        : alert('Please provide a email and password')
    }
    onLocalSignIn = () => {
        this.props.navigation.navigate('Local')
    }
    renderButton = () => {
        return !this.props.loading 
            ?   [
                    <Button key="public" onPress={this.onPublicSignIn.bind(this)} text='Login'/>, 
                    <Button key="local" onPress={this.onLocalSignIn.bind(this)} text='Local'/>
                ]
            :   <AppLoading/>
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
const mapStateToProps = ({ auth }) => {
    const { error, loading } = auth
    return {
        error,
        loading
    }
}
export default connect(mapStateToProps, { loginUser })(LoginForm)