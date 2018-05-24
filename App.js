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
  TodoInputContainer,
  TodoRemoveButton
} from "./components/todoApp";

import { containerStyles } from "./styles/common/containerStyles";

export default class App extends Component {
  state = { todos: ["Something"], value: "" };

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

  removeTodo = () => {
    const newTodos = [...this.state.todos];
    newTodos.shift()
    this.setState({todos: newTodos})
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
        {/* Agregar vista con height: '100%' */}
        <TodoRemoveButton />
      </View>
    );
  };
};

