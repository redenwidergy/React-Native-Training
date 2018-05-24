import React from "react";
import { View } from "react-native";
import {
  CustomInput
} from "../common"

import {
  TodoAddButton
} from "./TodoAddButton"

import { todoInputStyles, todoItemContainer } from "../../styles/todoApp"

const TodoInputContainer = ({ handlePress, handleChangeText, value }) => {
  const { inputStyle, inputContainerStyle } = todoInputStyles;
  const { todoItem } = todoItemContainer;
  return (
    <View style={[todoItem, inputContainerStyle]}>
      <CustomInput
        onChangeText={(text) => handleChangeText(text)}
        onSubmitEditing={handlePress}
        placeholder="Enter an item!"
        styles={inputStyle}
        value={value}
      />
      <TodoAddButton
        handlePress={handlePress}
      />
    </View>
  );
}

export { TodoInputContainer }