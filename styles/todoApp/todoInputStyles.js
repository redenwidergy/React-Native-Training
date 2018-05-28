import { StyleSheet } from "react-native";
import { sizes } from "../constants";

const todoInputStyles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#f5fCff',
    fontSize: sizes.commonText + 2,
    fontWeight: sizes.bold,
    height: sizes.standardContainer,
    flex: 1
  },
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%'
  }
});

export { todoInputStyles };
