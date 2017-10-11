import LocalNavigator from './src/local/components/localNavigator'
import LoginForm from './src/auth/components/loginForm'
import { StackNavigator } from 'react-navigation'
const MainNavigator = StackNavigator({
    LoginForm: {
        screen: LoginForm,
        navigationOptions: {
            headerTinkColor: 'white',
            headerStyle: {
              backgroundColor: '#007aff'
            },
            title:'Welcome'
        }
    },
    ...LocalNavigator,
  })

  export default MainNavigator