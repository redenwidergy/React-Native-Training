import React from "react";
import { Text, View } from "react-native";

import { CustomButton } from "../common";

import {
  todoItem,
  todoItemContainer
} from "../../styles/todoApp"

const TodoItem = ({ children, handlePress, handleDelete }) => {
  const { todoText } = todoItem;
  const { todoContainer } = todoItemContainer;
  return (
    <View style={[todoContainer]}>
      <Text style={todoText}>
        {children}
      </Text>
      <CustomButton
        underlayColor="#fafafa"
        // styles={buttonContainer}
        onPress={handlePress}
      >
        <Text style={todoText}>View</Text>
      </CustomButton>
      <CustomButton
        underlayColor="#fafafa"
        // styles={buttonContainer}
        onPress={handleDelete}
      >
        <Text style={todoText}>X</Text>
      </CustomButton>
    </View>
  )
}


export { TodoItem };
