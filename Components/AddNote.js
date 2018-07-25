import React,{Component} from 'react'
import {View,Text,TextInput,Button,Alert,ScrollView, Image} from 'react-native'
import {database} from '../Database'
import {Theme} from './ThemeProvider';


class NoteEdit extends Component{
    static navigationOptions = {
        title: 'Create',
        header:null
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

    add(){
        database.ref('/notes').push().set(this.state.note,(error)=>{
            if(error){
                console.log('unsuccesful operation: '+error)
                Alert.alert('Failed','Could not Add note',[{text:'OK'}])
            }else{
                console.log("Added Note")
                Alert.alert('Success','Note Added',[{text:'OK',onPress:()=>this.props.navigation.navigate('Home')}])
            }
        })
            
        }


    render(){
        
        return(
            <Theme.consumer>

            
            <ScrollView>
            <View style={{flex: 1,flexDirection: 'column'}}>
            <View style={{flex:1, flexDirection: 'column',alignItems: 'flex-start',marginTop:20}}>
                    <Button onPress={()=>this.props.navigation.navigate('Home')}
                        title="Home"
                        color="#C40A4D"
                    />
                </View>
            <View style={{marginTop:50,justifyContent: 'center',alignItems: 'center', marginBottom:50}}>
                <Image source={require('./../img/newrnote2.png')}/>
                </View>
                <Text style={{fontWeight:'bold', fontSize:20}}> Title </Text>
                <TextInput placeholder="Insert Note Title!" placeholderTextColor="grey"
                    style={{height: 40, marginBottom:20, fontSize: 15}}
                    onChangeText={(name) => this.setState(prevState=>({
                        note:{
                            ...prevState.note,
                            name
                        }
                    }))}
                    value={this.state.note.name}
                    // placeholder={this.state.note.name}
                />
                <Text style={{fontWeight:'bold', fontSize:20}}> Content </Text>
                <TextInput
                    style={{height:300 }}
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
                <Button onPress={()=>this.add()}
                title="Add Note"
                color="#048775"
                />
            </View>
        </ScrollView>
        </Theme.consumer>
        )
    }


}
export default NoteEdit