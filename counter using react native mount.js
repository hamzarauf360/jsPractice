import * as React from 'react';
import { Button,ScrollView,Text, View, StyleSheet,Switch } from 'react-native';
import Constants from 'expo-constants';
let id = 0; // id for each list item

const styles = StyleSheet.create({
 
  appContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

 count: {
   fontSize:48,
 },
   
})




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count:0,
    }
  }

  componentDidMount()
  {
      setInterval(this.inc,1000)
  }

  inc = () =>
  {
    this.setState(
        prevState => ({
          count: prevState.count + 1,
        })
    )
  }
 
  render() {
    // here goes the html declartive
    //we iterate the whole todo list and for each todo we create a react component
    // the upper case Todo is a react component
    return (
      <View style={styles.appContainer}>
        <Text style= {styles.count}>{this.state.count}</Text>
        
      </View>
    );
  }
}
