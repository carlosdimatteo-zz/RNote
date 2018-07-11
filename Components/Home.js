import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

class Home extends Component{
    static navigationOptions = {
        title: 'Home'
      };
constructor(){
    super();
    this.state={
        notes:[
            {
                name:"gente",
                content:"valeria,carlos,yizi"
            },
            {
                name:"Nota Cool",
                content:"esta nota esta brutal"
            }
        ]

    }
}

    updateNote(note,index){
       console.log('Notes Before: '+JSON.stringify(this.state.notes))
       let newNotes = this.state.notes
       newNotes[index]=note
       console.log("notes after: "+JSON.stringify(newNotes))
       this.setState({notes:NewNotes})
    }

    goToEdit(note,index){
        console.log("navigating "+JSON.stringify(note))
        this.props.navigation.navigate("Edit",{
            note:note,
            index:index,
            updateNote:this.UpdateNote
        })
    }

    render(){

        return(

            <View>
                <Text>
                     Home
                </Text>
                <View>
                {this.state.notes.map((note,index)=>(
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
            </View>

        )


    }


}

export default Home