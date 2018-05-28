import React, { Component } from 'react';
import {
  Platform,
  View,
  Text
} from 'react-native';

import {
  Header
} from "./components/common";

import {
  TodosContainer,
  TodoInputContainer,
  TodoRemoveAllButton
} from "./components/todoApp";

import { containerStyles } from "./styles/common/containerStyles";

export default class App extends Component {
  state = {
    todos: ["Something", "Something Else"],
    value: "",
    selected: [false, true]
  };

  getValueFromInput(text) {
    this.setState({
      value: text
    });
  }

  addTodo() {
    if (this.state.value) {
      this.setState(prevState => ({
        todos: [...prevState.todos, prevState.value],
        selected: [...prevState.selected, false],
        value: ""
      }));
    }
  }

  removeSelectedTodos() {
    const newTodos = [...this.state.todos].filter(
      (todo, index) => this.state.selected[index]
    );
    this.setState({
      todos: newTodos
    });
  }

  render() {
    console.log(this.state);
    const { container } = containerStyles
    return (
      <View style={container}>
        <Header>Todo List</Header>
        <TodoInputContainer
          handlePress={() => this.addTodo()}
          handleChangeText={(text) => this.getValueFromInput(text)}
          value={this.state.value}
        />
        <TodosContainer
          todos={this.state.todos}
          selected={this.state.selected}
        />
        <TodoRemoveAllButton
          handlePress={() => this.removeSelectedTodos()}
        />
      </View>
    );
  };
};
