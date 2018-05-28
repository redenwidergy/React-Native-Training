import React from "react";
import { Text } from "react-native";

import { CustomButton } from "../common"

import { todoAddButton } from "../../styles/todoApp";

const TodoAddButton = ({ handlePress }) => {
  const { buttonContent, buttonContainer } = todoAddButton;
  return (
    <CustomButton
      underlayColor="#fafafa"
      styles={buttonContainer}
      onPress={handlePress}
    >
      <Text style={buttonContent}>-></Text>
    </CustomButton>
  )
}

export { TodoAddButton };
