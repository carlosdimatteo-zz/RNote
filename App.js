import React from 'react';
// import {Stylesheet} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import NoteEdit from './Components/NoteEdit'
import Home from './Components/Home'
import AddNote from './Components/AddNote'
import ThemeProvider from './Components/ThemeProvider'
export default class App extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <ThemeProvider>
        <Routes/>
      </ThemeProvider>
      
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
    Edit:NoteEdit,
    Add:AddNote
    },{
      initialRouteName:'Home'
    });                                    
