import React from "react"
import { Text, View } from "react-native"

import { headerStyles } from "../../styles/common"

const Header = ({children}) => {
  const {
    containerStyle,
    headerText
  } = headerStyles;
  
  return (
    <View style={containerStyle}>
      <Text style={headerText}>
      {children}
      </Text>
    </View>
  );
}

export { Header }