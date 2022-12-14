import React from "react";
import { TouchableOpacity, Image } from 'react-native'
import { View } from "react-native-web";

export default function CustomButton2(props){
    return(
        
        <TouchableOpacity 
        onPress={props.action}
        style={{
            width: 215,
            height: 41,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            marginBottom: 12,
        }}>
            <View>
                <Image source={{uri:props.uri}} style={{width: 100, height:40}} resizeMode = "stretch"/>
            </View>
        </TouchableOpacity>
    );
}

    