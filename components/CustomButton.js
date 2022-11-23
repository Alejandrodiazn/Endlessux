import React from "react";
import { TouchableOpacity, Text } from 'react-native'

export default function CustomButton(props){
    return(
        
        <TouchableOpacity 
        onPress={props.action}
        style={{
            width: 215,
            height: 41,
            backgroundColor: '#FFFF',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.45)',
            marginBottom: 12,
        }}>
            <Text style={{fontSize: 17, color:'#898989',}}>{props.text}</Text>
        </TouchableOpacity>
    );
}

    