import { StyleSheet } from 'react-native'

export const containersStyles = StyleSheet.create({
    containerView:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    containerModal: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    rightButton: { 
        flexDirection: "row", 
        flex: 1, 
        position: "absolute", 
        bottom: 50, 
        left: 0, 
        right: 0, 
        justifyContent: 'flex-end', 
        padding: 15  
    },
    imageBackground:{
            flex:1,
            resizeMode: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
    }
})