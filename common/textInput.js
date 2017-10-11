import React from 'react'
import glamorous from 'glamorous-native'
import { gray, white, primary } from '../styles/colors' 
import { Platform } from 'react-native'

const Style = Platform.OS === 'ios' ? {
    width: 300, 
    height: 50, 
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: white,
    borderRadius: 8,
}
: {
    width: 300, 
    height: 50, 
    backgroundColor: white,
}
export const TextInput = glamorous.textInput({
    ...Style
})

