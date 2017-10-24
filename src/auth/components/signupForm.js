import React, { Component } from 'react'
import { Button } from '../../common'
import { StyleSheet, Image, View } from 'react-native'
import { whiteTrans } from '../../styles/colors'
import { containersStyles, inputStyles, fontStyles } from '../../styles'
import { Form, Item, Input, Col, Row, Grid, Spinner, Text } from 'native-base';
import { NavigationActions } from 'react-navigation'
import { signupUser } from '../actions'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
class SignupForm extends Component {
    state={
        email: '',
        password: '',
        confirmPassword: '',
        fullname: ''
    }
    onEmailChange = email => this.setState({ email })
    onPasswordChange = password => this.setState({ password })
    onConfirmPasswordChange = confirmPassword => this.setState({ confirmPassword })
    onFullnameChange = fullname => this.setState({ fullname })

    onPublicSignup = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Private'})
            ]
        })
        const { email, password, confirmPassword, fullname } = this.state
        if (password === confirmPassword){
            this.props.signupUser({ fullname, email, password }, () => this.props.navigation.dispatch(resetAction))
            this.setState({
                email: '',
                password: '',
                confirmPassword: '',
                fullname: ''
            })
        } else {
            alert('Passwords don\'t match')
            this.setState({
                password: '',
                confirmPassword: ''
            })
        }
    }
    render(){
        const { rightButton, authBackground } = containersStyles
        return(
            <View style={authBackground}>   
                <Text style={fontStyles.brandSubtitle}>Create an account</Text>
                <Form>
                    <Item rounded style={inputStyles.authInput}>
                        <Input 
                            placeholder='Full name'
                            onChangeText={this.onFullnameChange}
                            value={this.state.fullname}
                        />
                    </Item>
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
                    <Item rounded style={inputStyles.authInput}>
                        <Input 
                            placeholder='Confirm Password'
                            secureTextEntry 
                            onChangeText={this.onConfirmPasswordChange}
                            value={this.state.confirmPassword}
                        />
                    </Item>
                    <Text style={fontStyles.errorStyled}>
                        {this.props.error}
                    </Text>
                    <Button rounded block onPress={() => this.onPublicSignup()}>Sign up</Button>
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
export default connect(mapStateToProps, { signupUser })(SignupForm)