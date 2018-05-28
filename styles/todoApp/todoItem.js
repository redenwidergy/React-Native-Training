import { StyleSheet } from "react-native";

import { sizes } from "../constants";

const todoItem = StyleSheet.create({
  todoText: {
    fontSize: sizes.commonText
  },
  todoRemoveButton: {
    fontSize: sizes.commonText + 6,
    fontWeight: sizes.bold,
    color: "#f00"
  },
  todoSelectedContainer: {
    backgroundColor: "#fafafa"
  },
  todoControls: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "50%"
  },
  selectedButtonContainer: {
    borderWidth: 3,
    borderColor: "#000",
    height: 40,
    width: 40,
    padding: 3
  },
  selectedButtonActive: {
    backgroundColor: "#000",
    height: "100%",
    width: "100%"
  }
})

export { todoItem };
