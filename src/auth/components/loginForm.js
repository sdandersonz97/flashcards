import React, { Component } from 'react'
import { Button } from '../../common'
import { StyleSheet, Image, View } from 'react-native'
import { whiteTrans } from '../../styles/colors'
import { containersStyles } from '../../styles'
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
                    <Button rounded block  key="public" onPress={this.onPublicSignIn.bind(this)}>Sign in</Button>,
                    <Button rounded transparent key="local" onPress={this.onLocalSignIn.bind(this)}>Create an account</Button>
                ]
                   
            :   <Spinner/>
    }
    render() {
        const { rightButton, imageBackground } = containersStyles
        return(
            <Image 
                source={require('../assets/form.jpg')} 
                style={[imageBackground, {justifyContent:'center'}]}
            >
                <Text style={styles.title}>Karte</Text>
                <Text style={styles.subTitle}>Flashcard app</Text>
                <Form>
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
                    <Text style={styles.errorStyled}>
                        {this.props.error}
                    </Text>
                    {this.renderButton()}
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
    },
    title:{
        backgroundColor: 'transparent',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    subTitle:{
        backgroundColor: 'transparent',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
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