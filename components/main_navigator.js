import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { white, primary } from '../helpers/colors'
import DeckList from '../containers/deck_list'
import AddDeck from '../components/add_deck'
import DeckShow from '../containers/deck_show'
import DeckQuestion from '../containers/deck_question'
import AddCard from '../components/add_card'

const Tabs = TabNavigator({
    DeckList:{
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>,
        title: 'Decks',
        headerStyle:{
          backgroundColor: primary
        },
        headerTitleStyle:{
          color: white
        }
      }
    },
    AddDeck:{
      screen: AddDeck,
      navigationOptions:{
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor}/>,
        title: 'Add a Decks',
        headerStyle:{
          backgroundColor: primary
        },
        headerTitleStyle:{
          color: white
        }
      }
    }
  },{
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? primary : white,
      style:{
        height:56,
        backgroundColor: Platform.OS === 'ios' ? white : primary,
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
          backgroundColor: primary
        },
        headerTitleStyle:{
          color: white
        }
      }
    },
    AddCard:{
      screen: AddCard,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: primary
        },
        headerTitleStyle:{
          color: white
        }
      }
    },
    DeckQuestion:{
      screen: DeckQuestion,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: primary
        },
        headerTitleStyle:{
          color: white
        }
      }
    }
  })

  export default MainNavigator