import React from "react";
import { TextInput } from "react-native";

const CustomInput = ({ placeholder, onChangeText, onSubmitEditing, styles, value }) => {
  return (
    <TextInput
      onChangeText={(text) => onChangeText(text)}
      onSubmitEditing={onSubmitEditing}
      placeholder={placeholder}
      style={styles}
      value={value}
    />
  );
};

export { CustomInput };