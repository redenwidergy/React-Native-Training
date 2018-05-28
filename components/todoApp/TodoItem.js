import React from "react";
import { Text, View } from "react-native";

import { CustomButton } from "../common";

import {
  todoItem,
  todoItemContainer
} from "../../styles/todoApp"

const TodoItem = ({ children, handlePress, handleDelete, selected }) => {
  const {
    selectedButtonActive,
    selectedButtonContainer,
    todoControls,
    todoRemoveButton,
    todoText,
    todoSelectedContainer
  } = todoItem;
  const { todoContainer } = todoItemContainer;
  return (
    <View style={selected ? [todoContainer, todoSelectedContainer] : todoContainer}>
      <Text style={todoText}>
        {children}
      </Text>
      <View style={todoControls}>
        <CustomButton
          underlayColor="#fafafa"
          styles={selectedButtonContainer}
          onPress={handlePress}
        >
          <View style={selected ? selectedButtonActive : ''} />
        </CustomButton>
        <CustomButton
          underlayColor="#fafafa"
          onPress={handleDelete}
        >
          <Text style={todoRemoveButton}>X</Text>
        </CustomButton>
      </View>
    </View>
  )
}


export { TodoItem };
