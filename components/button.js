import React from 'react'
import { Text } from 'react-native'
import glamorous from 'glamorous-native'

const StyledButton = glamorous.touchableOpacity({
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 200,
    height: 50,
})

const Button = ({ text, ...rest }) => (
    <StyledButton  {...rest}>
        <Text style={{textAlign:'center'}}> {text} </Text>
    </StyledButton> 
)

export default Button