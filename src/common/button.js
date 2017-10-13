import React from 'react'
import { Text } from 'react-native'
import glamorous from 'glamorous-native'

const StyledButton = glamorous.touchableOpacity({
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 15,
    width: 200,
    height: 50,
})

export const Button = ({ text, ...rest }) => (
    <StyledButton  {...rest}>
        <Text style={{textAlign:'center'}}> {text} </Text>
    </StyledButton> 
)
