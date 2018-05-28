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
import { emptyTodoList } from "./styles/todoApp"

export default class App extends Component {
  state = {
    todos: [],
    value: "",
    selected: []
  };

  getValueFromInput(text) {
    this.setState({
      value: text
    });
  }

  addTodo() {
    const { todos, value } = this.state;
    if (value && todos.indexOf(value) < 0) {
      this.setState(prevState => ({
        todos: [...prevState.todos, prevState.value],
        selected: [...prevState.selected, false],
        value: ""
      }));
    } else if (value) {
      alert("Don't repeat your TODOS in your list!")
    } else {
      alert("Please write something in the field.");
    }
  }

  handleSelectTodo(index) {
    const newSelected = [...this.state.selected];
    newSelected[index] = !newSelected[index];
    this.setState({
      selected: newSelected
    });
  }

  handleRemoveTodo(todo) {
    const newTodos = [...this.state.todos];
    this.setState({
      todos: newTodos.filter(item => item !== todo)
    });
  }

  removeSelectedTodos() {
    const newTodos = [...this.state.todos];
    
    this.setState(prevState => ({
      todos: newTodos.filter(
        (todo, index) => !prevState.selected[index]
      ),
      selected: prevState.selected.filter(item => item === false)
    }));
  }

  render() {
    const { container } = containerStyles;
    const { emptyTodoListContainer, emptyTodoListText } = emptyTodoList;
    const { selected, todos, value } = this.state;
    return (
      <View style={container}>
        <Header>Todo List</Header>
        <TodoInputContainer
          handlePress={() => this.addTodo()}
          handleChangeText={text => this.getValueFromInput(text)}
          value={value}
        />
        {
          todos.length ? (
            <TodosContainer
              todos={todos}
              selected={selected}
              handleSelect={index => this.handleSelectTodo(index)}
              handleRemove={todo => this.handleRemoveTodo(todo)}
            />
            ) : (
              <View style={emptyTodoListContainer}>
                <Text style={emptyTodoListText}>
                  Add a TODO to your list!
                </Text>
              </View>
            )
        }
        <TodoRemoveAllButton
          handlePress={() => this.removeSelectedTodos()}
        />
      </View>
    );
  };
};
