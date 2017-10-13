import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { white, primary } from '../../styles/colors'
import PrivateDeckList from '../containers/privateDeckList'
import PublicDeckList from '../containers/publicDeckList'
import AddPrivateDeck from './addPrivateDeck'
import AddPrivateCard from './addPrivateCard'
import PrivateDeckShow from '../containers/privateDeckShow'
import PrivateDeckQuiz from '../containers/privateDeckQuiz'
const Tabs = TabNavigator({
  PublicDeckList:{
    screen: PublicDeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={24} color={tintColor}/>,
      title: 'Decks',
      headerStyle:{
        backgroundColor: primary
      },
      headerTitleStyle:{
        color: white
      }
    }
  },
  PrivateDeckList:{
    screen: PrivateDeckList,
    navigationOptions: {
      tabBarLabel: 'My Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={24} color={tintColor}/>,
      title: 'Decks',
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
      height:40,
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
  const PrivateNavigator = StackNavigator({
    Home: {
        screen: Tabs
    },
    PrivateDeckShow:{
      screen: PrivateDeckShow,
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
    AddPrivateCard: {
      screen: AddPrivateCard,
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
    PrivateDeckQuiz: {
      screen: PrivateDeckQuiz,
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
    },{
    headerMode: 'none'
  })

  export default PrivateNavigator