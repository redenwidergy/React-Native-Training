import { StyleSheet } from "react-native";

const todoItemContainer = StyleSheet.create({
  todoContainer: {
    borderColor: '#ddd',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export { todoItemContainer };
