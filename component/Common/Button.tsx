import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons'

type ButtonProp = {
    iconName: string,
    onPress: () => void,
    iconType: string
  }

const Button = ( Prop: ButtonProp  ) => {

    switch (Prop.iconType) {
        case "FontAwesome":
            return (
                <TouchableOpacity onPressOut = {Prop.onPress}>
                    <FontAwesome name={Prop.iconName} size={80} color="#ffffff"/>
                </TouchableOpacity>
            );
        　  break;
        case "Entypo":
            return (
                <TouchableOpacity onPressOut = {Prop.onPress}>
                    <Entypo name={Prop.iconName} size={80} color="#ffffff"/>
                </TouchableOpacity>
            );
        　  break;
        default:
            return (
                <TouchableOpacity onPressOut = {Prop.onPress}>
                    <Entypo name={Prop.iconName} size={80} color="#ffffff"/>
                </TouchableOpacity>
            )
        } 
    
};

export default Button;