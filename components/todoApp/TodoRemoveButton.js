import React from "react";
import { Text } from "react-native";

import { CustomButton } from "../common";

import { todoRemoveButton } from "../../styles/todoApp";

const TodoRemoveButton = ({ handlePress }) => {
  const { buttonContent, buttonContainer } = todoRemoveButton;
  return (
    <CustomButton
      underlayColor="#def"
      styles={buttonContainer}
      onPress={handlePress}
    >
      <Text style={buttonContent}>Remove Completed Items</Text>
    </CustomButton>
  );
};

export { TodoRemoveButton };