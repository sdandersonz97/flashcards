import React, { Component } from 'react'
import { Button } from '../../common'
import { StyleSheet, Image, View } from 'react-native'
import { whiteTrans } from '../../styles/colors'
import { containersStyles } from '../../styles'
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
        const { rightButton, imageBackground } = containersStyles
        return(
            <Image 
                source={require('../assets/form.jpg')} 
                style={[imageBackground, {justifyContent:'center'}]}
            >
                <Form>
                    <Item rounded style={{backgroundColor:whiteTrans, margin:10}}>
                        <Input 
                            placeholder='Full name'
                            onChangeText={this.onFullnameChange}
                            value={this.state.fullname}
                        />
                    </Item>
                    <Item rounded style={{backgroundColor:whiteTrans, margin:10}}>
                        <Input 
                            placeholder='Email'
                            onChangeText={this.onEmailChange}
                            value={this.state.email}
                        />
                    </Item>
                    <Item rounded style={{backgroundColor:whiteTrans, margin:10}}>
                        <Input 
                            placeholder='Password'
                            secureTextEntry 
                            onChangeText={this.onPasswordChange}
                            value={this.state.password}
                        />
                    </Item>
                    <Item rounded style={{backgroundColor:whiteTrans, margin:10}}>
                        <Input 
                            placeholder='Confirm Password'
                            secureTextEntry 
                            onChangeText={this.onConfirmPasswordChange}
                            value={this.state.confirmPassword}
                        />
                    </Item>
                    <Text style={styles.errorStyled}>
                        {this.props.error}
                    </Text>
                    <Button rounded block onPress={() => this.onPublicSignup()}>Sign up</Button>
                </Form>
            </Image>
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
export default connect(mapStateToProps, { signupUser })(SignupForm)