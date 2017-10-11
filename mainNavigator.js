import React from 'react'
import LocalNavigator from './src/local/components/localNavigator'
import PrivateNavigator from './src/public/components/privateNavigator'
import LoginForm from './src/auth/components/loginForm'
import { StackNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import { white, primary } from './src/styles/colors'
const MainNavigator = StackNavigator({
    LoginForm: {
        screen: LoginForm,
        navigationOptions: {
            headerTinkColor: white,
            headerStyle: {
              backgroundColor: primary
            },
            title:'Welcome'
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