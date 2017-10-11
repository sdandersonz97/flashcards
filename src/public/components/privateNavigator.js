import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { white, primary } from '../../styles/colors'
import PrivateDeckList from '../containers/privateDeckList'
import AddPrivateDeck from './addPrivateDeck'
const Tabs = TabNavigator({
    PrivateDeckList:{
      screen: PrivateDeckList,
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
    AddPrivateDeck:{
      screen: AddPrivateDeck,
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
  const PrivateNavigator = StackNavigator({
    Home: {
        screen: Tabs
    }
    },{
    headerMode: 'none'
  })

  export default PrivateNavigator