import React, { Component } from 'react'
import { Button } from '../../common'
import { StyleSheet, View } from 'react-native'
import { whiteTrans } from '../../styles/colors'
import { containersStyles, inputStyles, fontStyles } from '../../styles'
import { Form, Item, Input, Col, Row, Grid, Spinner, Text } from 'native-base';
import { NavigationActions } from 'react-navigation'
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
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Private'})
            ]
        })
        const { loginUser, navigation } = this.props
        const { email, password } = this.state
        email && password
        ? loginUser({ email, password }, () => navigation.dispatch(resetAction))
        : alert('Please provide a email and password')
    }
    onLocalSignIn = () => {
        this.props.navigation.navigate('SignupForm')
    }
    renderButton = () => {
        return !this.props.loading 
            ?   [
                    <Button rounded block key="public" onPress={this.onPublicSignIn.bind(this)}>Sign in</Button>,
                    <Button rounded transparent  key="local" onPress={this.onLocalSignIn.bind(this)}>Create an account</Button>
                ]
                   
            :   <Spinner/>
    }
    render() {
        const { rightButton, authBackground } = containersStyles
        return(
            <View 
                style={authBackground}
            >
                <Text style={fontStyles.brandTitle}>Karte</Text>
                <Text style={fontStyles.brandSubtitle}>Flashcard app</Text>
                <Form>
                    <Item rounded style={inputStyles.authInput}>
                        <Input 
                            placeholder='Email'
                            onChangeText={this.onEmailChange}
                            value={this.state.email}
                        />
                    </Item>
                    <Item rounded style={inputStyles.authInput}>
                        <Input 
                            placeholder='Password'
                            secureTextEntry 
                            onChangeText={this.onPasswordChange}
                            value={this.state.password}
                        />
                    </Item>
                    <Text style={fontStyles.errorStyled}>
                        {this.props.error}
                    </Text>
                    {this.renderButton()}
                </Form>
        </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { error, loading } = auth
    return {
        error,
        loading
    }
}
export default connect(mapStateToProps, { loginUser })(LoginForm)