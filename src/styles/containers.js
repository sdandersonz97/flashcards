import { StyleSheet } from 'react-native'

export const containersStyles = StyleSheet.create({
    containerView:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
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
    rowButtom: { 
        flexDirection: "row", 
        flex: 1, 
        position: "absolute", 
        bottom: 50, 
        left: 0, 
        right: 0, 
        justifyContent: 'space-between', 
        padding: 15  
    },
    imageBackground:{
        flex:1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        
    },
    formContainer:{
        margin:10, 
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    }
})