import React from 'react'
import { View, StyleSheet } from 'react-native'

export const CardSection = (props) => {
    return(
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
        position: 'relative'
    }
})
