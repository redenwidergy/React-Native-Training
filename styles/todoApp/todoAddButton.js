import { Platform, StyleSheet } from "react-native";
import { sizes } from "../constants";

const todoAddButton = StyleSheet.create({
  buttonContent: {
    color: '#ccc',
    fontSize: sizes.commonText + 4
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#f5fCff',
    paddingTop: 2,
    paddingBottom: 6,
    paddingLeft: Platform === 'ios' ? 6 : 10,
    paddingRight: Platform === 'ios' ? 6 : 10,
    borderRadius: 100
  }
});

export { todoAddButton };
