import React from 'react'
import glamorous from 'glamorous-native'

const View = glamorous.view({
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    position: 'relative'
})

export const CardSection = (props) => {
    return(
        <View style={props.style}>
            {props.children}
        </View>
    )
}

