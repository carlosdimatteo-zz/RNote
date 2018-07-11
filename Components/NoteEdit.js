import React,{Component} from 'react'
import {View,Text,TextInput,Button,Alert} from 'react-native'
import {database} from '../Database'


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
        let id = this.props.navigation.getParam('id')
        // console.log('Notes Before: '+JSON.stringify(notes))
    let updates={}
    updates['/notes/'+id]=this.state.note
    database.ref().update(updates,(error)=>{
        if(error){
            console.log('unsuccesful operation')
            Alert.alert('Failed','Could not update note',[{text:'OK'}])
        }else{
            console.log(JSON.stringify(getAll()))
            Alert.alert('Success','Note Updated',[{text:'OK',onPress:()=>this.props.navigation.navigate('Home')}])
            
        }
    })
        // console.log("notes after: "+JSON.stringify(notes))
    }

    delete(){
        let id = this.props.navigation.getParam('id')
        database.ref('/notes/'+id).set(null,(error)=>{
        
            if(error){
                console.log('unsuccesful operation')
                Alert.alert('Failed','Could not delete note',[{text:'OK'}])            }else{
                    console.log('note deleted')
                    Alert.alert('Success','Note Deleted',[{text:'OK',onPress:()=>this.props.navigation.navigate('Home')}])
            }
        })
        
           
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
                <Button onPress={()=>this.delete()}
                title="Delete Note"
                color="red"
                />
            </View>

        )
    }
}



export default NoteEdit