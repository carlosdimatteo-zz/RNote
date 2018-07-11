import React,{Component} from 'react'
import {View,Text,TextInput,Button} from 'react-native'



class NoteEdit extends Component{
    static navigationOptions = {
        title: 'Note'
      };
    constructor(){
        super();
        this.state={
                note:{
                    name:"",
                    content:""
                }
        }
        
    }


    componentDidMount(){
        let note = this.props.navigation.getParam('note')
        this.setState({note:note});
    }

    update(){
        let index = this.props.navigation.getParam('index')
        let updateNote =this.props.navigation.getParam('updateNote')
        updateNote(this.state.note,index)
    }
    onTextChange(text){
    }


    render(){
        
        return(

            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(name) => this.setState(prevState=>({
                        note:{
                            ...prevState.note,
                            name
                        }
                    }))}
                    value={this.state.note.name}
                    placeholder={this.state.note.name}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    multiline={true}
                    onChangeText={(content) => this.setState(prevState=>({
                        note:{
                            ...prevState.note,
                            content
                        }
                    }))}
                    value={this.state.note.content}
                    placeholder={this.state.note.content}
                />
                <Button onPress={()=>this.update()}
                title="Update Note"
                color="black"
                />
            </View>

        )
    }


}
export default NoteEdit