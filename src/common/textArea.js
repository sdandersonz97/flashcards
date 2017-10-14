import React from 'react'
import { gray, white, primary } from '../styles/colors' 
import { Modal, View, TextInput } from 'react-native'
import { styles } from './commonStyles'
import { Button } from './button'
import { CardSection } from './cardSection'

export const TextArea = (props) => {
    const { textArea } = styles
    return (
        <TextInput style={textArea} {...props} />       
    )
}

