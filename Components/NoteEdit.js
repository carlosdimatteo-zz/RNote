import React,{Component} from 'react'

import {View,Text,TextInput,Button,Alert, ScrollView, Image} from 'react-native'

import {database} from '../Database'


class NoteEdit extends Component{
    static navigationOptions = {
        title: 'Note',
        header: null
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
    share(){
        
            Share.share(
            {
                
              message: "  -From RNote-\n"+"Title: "+this.state.note.name+"\nContent: "+this.state.note.content+"\n"
            
            }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
    }


    render(){
        
        return(


            <Theme.consumer>
            {({colors :{primary,secondary,dark,light,textDefault,textPrimary,textSecondary}})=>(

                <ScrollView>
            <View style={{flex: 1,flexDirection: 'column'}}>
                <View style={{flex:1, flexDirection: 'column',alignItems: 'flex-start',marginTop:20}}>
                    <Button onPress={()=>this.props.navigation.navigate('Home')}
                        title="Home"
                        color="#C40A4D"
                    />
                </View>
                <View style={{marginTop:50,justifyContent: 'center',alignItems: 'center', marginBottom:50}}>
                    <Image source={require('./../img/note.png')}/>
                </View>
                <Text style={{fontWeight:'bold', fontSize:20}}> Title </Text>
                <TextInput
                        style={{height: 40}}
                        onChangeText={(name) => this.setState(prevState=>({
                            note:{
                                ...prevState.note,
                                name
                            }
                        }))}
                        value={this.state.note.name}
                        placeholder={this.state.note.name}
                    />
                    <Text style={{fontWeight:'bold', fontSize:20}}> Content </Text>
                    <TextInput
                        style={{height:150}}
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
                    color="#048775"
                    />
                    <Button onPress={()=>this.delete()}
                    title="Delete Note"
                    color="#C40A4D"
                    />
                    <Button onPress={()=>this.share()}
                    title="Share note"
                    color="lightgray"
                />
            </View>
            </ScrollView>


            )}
            
            
        </Theme.consumer>

            
        )
    }
}



export default NoteEdit