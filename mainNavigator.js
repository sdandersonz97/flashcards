import React from 'react'
import LocalNavigator from './src/local/components/localNavigator'
import PrivateNavigator from './src/public/components/privateNavigator'
import LoginForm from './src/auth/components/loginForm'
import SignupForm from './src/auth/components/signupForm'
import { StackNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import { white, primary } from './src/styles/colors'
const MainNavigator = StackNavigator({
    LoginForm: {
        screen: LoginForm,
        navigationOptions: {
            header:null
        }
    },
    SignupForm:{
        screen: SignupForm,
        navigationOptions: {
            header:null
        }
    },
    Local: {
        screen: LocalNavigator
    },
    Private: {
        screen: PrivateNavigator
    }
  })

  export default MainNavigator