import React, { Component } from 'react'
import glamorous from 'glamorous-native'


const View = glamorous.view({
        backgroundColor: "#fff",
        borderWidth: 1,
        minHeight: 100,
        maxWidth: '100%',
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
})

export class Card extends Component {
    render(){
        return(
            <View style={this.props.style}>
                {this.props.children}
            </View>
        )
    }
    
}

