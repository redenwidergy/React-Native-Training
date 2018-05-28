import { StyleSheet } from "react-native";

import { sizes } from "../constants";

const emptyTodoList = StyleSheet.create({
  emptyTodoListContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "80%"
  },
  emptyTodoListText: {
    fontSize: 1.5 * sizes.commonText,
    color: "#bbb"
  }
});

export { emptyTodoList };