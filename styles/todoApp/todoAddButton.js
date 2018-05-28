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
    marginLeft: 20,
    paddingTop: Platform.OS === 'ios' ? 4 : 2,
    paddingBottom: Platform.OS === 'ios' ? 8 : 6,
    paddingLeft: Platform.OS === 'ios' ? 8 : 10,
    paddingRight: Platform.OS === 'ios' ? 8 : 10,
    borderRadius: 100
  }
});

export { todoAddButton };
