import React from "react";
import { Text, TouchableHighlight } from "react-native";

const CustomButton = ({children, onPress, underlayColor, styles}) => {
  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      style={styles}
      onPress={onPress}
    >
      {children}
    </TouchableHighlight>
  )
}

export { CustomButton };