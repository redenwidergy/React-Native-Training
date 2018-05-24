import { StyleSheet } from "react-native";

import { sizes } from "../constants";

const todoRemoveButton = StyleSheet.create({
  buttonContent: {
    color: '#f00',
    fontSize: sizes.commonText - 6,
    fontWeight: sizes.bold
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.standardContainer,
  }
});

export { todoRemoveButton };