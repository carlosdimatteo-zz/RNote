import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Button} from 'react-native'
import {getAll} from '../Database'
class Home extends Component{
    static navigationOptions = {
        title: 'Home'
      };
constructor(){
    super();
}

    componentDidMount(){   
         console.log("these are the current notes"+JSON.stringify(getAll()))


    }

    goToEdit(note,index){
        console.log("navigating to Edit "+JSON.stringify(note))
        this.props.navigation.navigate("Edit",{
            note:note,
            index:index,
            updateNote:this.UpdateNote
        })
    }
    goToAdd(){
        console.log("navigating to Add ")
        this.props.navigation.navigate("Add")
    }

    render(){
            let notes=getAll()
        return(

            <View>
                <Text>
                     Home
                </Text>
                <View>
                {notes.map((note,index)=>(
                    <TouchableOpacity key={index} onPress={()=>this.goToEdit(note,index)}>
                    <Text>
                        Note title: {note.name}
                    </Text>
                    <Text>
                        Content: {note.content}
                    </Text>
                    </TouchableOpacity>
                    
                ))}
                </View>
                <Button onPress={()=>this.goToAdd()} 
                title="Add Note"
                color="teal"
                />
            </View>

        )


    }


}

export default Home