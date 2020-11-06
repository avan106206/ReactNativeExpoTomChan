import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

type ButtonProp = {
    iconName: string,
    onPress: () => void
  }

const Button = ( Prop: ButtonProp  ) => {
    return (
        <TouchableOpacity onPressOut = {Prop.onPress}>
            <FontAwesome name={Prop.iconName} size={80} color="#ffffff"/>
        </TouchableOpacity>
    );
};

export default Button;