import React from 'react'
import { StatusBar, View, AsyncStorage } from 'react-native'
import MainNavigator from './mainNavigator'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './src/reducers'
import { Constants } from 'expo'
import { primary } from './src/styles/colors'
import { setLocalNotification } from './src/utils/helpers'
import { config } from './src/utils/firebaseConfig'
import firebase from 'firebase'
import { Root } from 'native-base'
function CardsStatusBar({ backgroundColor, ...props}){
  return(
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp(config)
  }
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={{ flex:1 }}>
          <CardsStatusBar backgroundColor={primary} barStyle='light-content'/>
          <Root><MainNavigator/></Root>
        </View>
      </Provider>
    );
  }
}
