import React from "react";
import { FlatList, Text } from "react-native";

import { TodoItem } from "./TodoItem"

const TodosContainer = ({ handleSelect, handleRemove, selected, todos }) => {

  return (
    <FlatList
      data={todos.map((todo, index) => ({
        key: todo,
        selected: selected[index],
        handlePress: () => handleSelect(index),
        handleDelete: () => handleRemove(todo)
      }))}
      renderItem={({item}) => (
        <TodoItem
          handlePress={item.handlePress}
          handleDelete={item.handleDelete}
          selected={item.selected}
        >
          {item.key}
        </TodoItem>
      )}
    />
  )
}

export { TodosContainer };
