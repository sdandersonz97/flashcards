import React from 'react'
import { Text } from 'react-native'
import glamorous from 'glamorous-native'

const StyledButton = glamorous.touchableOpacity({
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
    width: 150
})

const Button = ({ color, text, ...rest }) => (
    <StyledButton style={{ backgroundColor: color }} {...rest}>
        <Text style={{textAlign:'center'}}> {text} </Text>
    </StyledButton> 
)

export default Button