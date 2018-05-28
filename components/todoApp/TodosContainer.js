import React from "react";
import { FlatList, Text } from "react-native";

import { TodoItem } from "./TodoItem"

const TodosContainer = ({ selected, todos }) => {

  return (
    <FlatList
      data={todos.map((todo, index) => ({
        key: todo,
        selected: selected[index]
      }))}
      renderItem={({item}) => (
        <TodoItem>
          {`${item.key}  ${String(item.selected).toUpperCase()}`}
        </TodoItem>
      )}
    />
  )
}

export { TodosContainer };
