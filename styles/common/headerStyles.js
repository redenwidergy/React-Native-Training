import { StyleSheet } from "react-native";
import { sizes } from "../constants";

const headerStyles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8ee1ff',
    height: sizes.standardContainer,
    width: '100%'
  },
  headerText: {
    color: '#f9f9f9',
    fontSize: sizes.commonText,
    fontWeight: sizes.bold
  }
});

export { headerStyles };