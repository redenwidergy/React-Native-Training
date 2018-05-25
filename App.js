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
  TodoRemoveButton
} from "./components/todoApp";

import { containerStyles } from "./styles/common/containerStyles";

export default class App extends Component {
  state = { todos: ["Something"], value: "", selected: [] };

  getValueFromInput(text) {
    this.setState({
      value: text
    });
  }

  addTodo() {
    if (this.state.value) {
      this.setState(prevState => ({
        todos: [...prevState.todos, prevState.value],
        value: ""
      }));
    }
  }

  removeTodos(todos) {
    const newTodos = [...this.state.todos].filter(todo => todos.indexOf(todo) < 0);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    console.log(this.state.todos)
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
        />
        {/* Agregar vista con height: '100%' */}
        <TodoRemoveButton />
      </View>
    );
  };
};
