import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import DeckList from './containers/deck_list'
import AddDeck from './components/add_deck'
import DeckShow from './containers/deck_show'
import DeckQuestion from './containers/deck_question'
import AddCard from './components/add_card'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { white, purple } from './helpers/colors'

function CardsStatusBar({ backgroundColor, ...props}){
  return(
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Tabs = TabNavigator({
  DeckList:{
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>  
    }
  },
  AddDeck:{
    screen: AddDeck,
    navigationOptions:{
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor}/>  
    }
  }
},{
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style:{
      height:56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowRadius: 6,
      shadowOpacity: 1,
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
          width: 0,
          height: 3
      }
    }
  }
})
const MainNavigator = StackNavigator({
  Home:{
    screen: Tabs
  },
  DeckShow:{
    screen: DeckShow,
    navigationOptions:{
      headerTintColor: white,
      headerStyle:{
        backgroundColor: purple
      }
    }
  },
  AddCard:{
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  DeckQuestion:{
    screen: DeckQuestion,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
})
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex:1 }}>
          <CardsStatusBar backgroundColor={purple} barStyle='light-content'/>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
