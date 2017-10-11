import React from 'react'
import { StatusBar, View, AsyncStorage } from 'react-native'
import MainNavigator from './src/local/components/mainNavigator'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'
import { Constants } from 'expo'
import { primary } from './src/styles/colors'
import { setLocalNotification } from './src/utils/helpers'
function CardsStatusBar({ backgroundColor, ...props}){
  return(
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex:1 }}>
          <CardsStatusBar backgroundColor={primary} barStyle='light-content'/>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
