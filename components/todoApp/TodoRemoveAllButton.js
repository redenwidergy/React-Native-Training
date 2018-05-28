import React from "react";
import { Text } from "react-native";

import { CustomButton } from "../common";

import { todoRemoveAllButton } from "../../styles/todoApp";

const TodoRemoveAllButton = ({ handlePress }) => {
  const { buttonContent, buttonContainer } = todoRemoveAllButton;
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

export { TodoRemoveAllButton };
