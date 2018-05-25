import React from "react";
import { FlatList, Text } from "react-native";

const TodoContainer = ({ todos }) => {

  return (
    <FlatList
      data={todos.map(todo => ({ key: todo }))}
      renderItem={({item}) => <Text>{item.key}</Text>}
    />
  )
}

export { TodoContainer };
