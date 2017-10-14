import React from 'react'
import { Button as NativeButton, Text } from 'native-base'
import { styles } from './commonStyles'
const { button } = styles
export const Button = ({ text, children, ...rest }) => (
    <NativeButton style={{margin: 10, minHeight: 48, minWidth:100}} {...rest}>
        <Text style={{textAlign:'center'}}> {children||text} </Text>
    </NativeButton> 
)
