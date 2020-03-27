import * as React from 'react';
import { Button,ScrollView,Text, View, StyleSheet,Switch } from 'react-native';
import {Constants} from 'expo'; // to use in different devices and automatically detect the screen size
let id = 0; // id for each list item

const styles = StyleSheet.create({ // to reuse the style
  todoContainer : {
    flexDirection:'row',  // places item in a row manner in a view
    alignItems:'center',	// places items with eachother
  },

 /* appContainer: {
    paddingTop: Constants.statusBarHeight,
  },*/
})


const Todo = (
  props 
) => (
  <View style={styles.todoContainer}>  // for style set it to jsx code or stylesheet
    <Switch value={props.todo.checked} onValueChange={props.onToggle}/> // the replacement of checkbox in reacnative
    <Button onPress={props.onDelete} title = "delete" />
    <Text>{props.todo.text}</Text> // to display some text


  </View>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [] // the todo list
    };
  }

  addTodo() {
    id++
    const text = "TODO Number" + id
    this.setState({
      // for updating our state we use this.setstate
      todos: [...this.state.todos, { id: id, checked: false, text: text }] //used the id parameter to uniquely identify each item of the list
      // used the checked parameter to keep track of whether element is checked or not
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo =>  {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id) // to remove the todo which we want to delete
    });
  }

  render() {
    // here goes the  declartive code
    //we iterate the whole todo list and for each todo we create a react native component
    // the upper case Todo is a react native component
    return (
      <View styles={styles.appContainer}> //in place of a div
        <Text>My ToDo App</Text>
        <Text>TODO COUNT: {this.state.todos.length} </Text>
        <Text>
          {" "}
          UNCHECKED TODO COUNT:{" "}
          {this.state.todos.filter(todo => !todo.checked).length}{" "}
        </Text>
        <Button onPress={this.addTodo.bind(this)} title = "NEW TODO" /> // for a button we use on press rather than onClick and for text use title
        <ScrollView>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)} //passed as a prop for list item
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
