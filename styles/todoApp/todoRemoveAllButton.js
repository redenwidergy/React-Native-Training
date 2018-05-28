import { StyleSheet } from "react-native";

import { sizes } from "../constants";

const todoRemoveAllButton = StyleSheet.create({
  buttonContent: {
    color: '#f00',
    fontSize: sizes.commonText - 6,
    fontWeight: sizes.bold
  },
  buttonContainer: {
    borderTopWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.standardContainer,
  }
});

export { todoRemoveAllButton };
