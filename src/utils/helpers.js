import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AsyncStorage } from 'react-native'
import { Permissions, Notifications } from 'expo'
import { white } from '../styles/colors' 
import { Entypo } from '@expo/vector-icons'
const NOTIFICATION_KEY = 'flashcard:key'

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createLocalNotification () {
    return {
        title: 'Study for today',
        body: "don't forget to study your decks today!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}
export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data) => {
  if(data === null){
    Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status }) => {
        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync()
          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setHours(20)
          tomorrow.setMinutes(8)
          Notifications.scheduleLocalNotificationAsync(
            createLocalNotification(),
            {
              time: tomorrow,
              repeat: 'day',
            }
          )
          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
        }
      })
    }})
  }

export const navigationHeaderRight = (navigation) => {
  return {
    headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('AddPrivateDeck')} style={{marginRight: 15}}>
            <Entypo name='plus' size={30} color={white}/>
        </TouchableOpacity>
    )
  }
}