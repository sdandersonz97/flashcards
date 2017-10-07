import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Card = (props) => {
    return(
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "#fff",
        borderWidth: 1,
        minHeight: 100,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})