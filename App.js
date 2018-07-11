import React from 'react';
// import {Stylesheet} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import NoteEdit from './Components/NoteEdit'
import Home from './Components/Home'
export default class App extends React.Component {
  render() {
    return (
      <Routes/>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const Routes = createStackNavigator({
    Home:Home,
    Edit:NoteEdit
    },{
      initialRouteName:'Home'
    });                                    