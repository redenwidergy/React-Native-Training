import { StyleSheet } from "react-native";

const todoItemContainer = StyleSheet.create({
  todoContainer: {
    borderColor: '#ddd',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export { todoItemContainer };
