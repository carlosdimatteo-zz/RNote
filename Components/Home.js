import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Button} from 'react-native'
import {database} from '../Database'
class Home extends Component{
    static navigationOptions = {
        title: 'Home'
      };
constructor(){
    super();
    this.state={
        notes:{}
    }
}


    componentDidMount(){   
        console.log('componentdidmount home')
        
    }

    async getData(){
        let notesRef=database.ref('/notes')
        await notesRef.once('value',(snapshot)=>{
            notes=snapshot.val()
            this.setState({notes:notes})
            console.log("notes from db: "+JSON.stringify(JSON.stringify(this.state.notes)))
        })
    }

    goToEdit(note,id){
        console.log("navigating to Edit "+JSON.stringify(note))
        this.setState({notes:{}})
        this.props.navigation.navigate("Edit",{
            note:note,
            id:id,
            updateNote:this.UpdateNote
        })
    }
    goToAdd(){
        console.log("navigating to Add ")
        this.setState({notes:{}})
        this.props.navigation.navigate("Add")
    }

    render(){
            this.getData()
            let noteIds = this.state.notes ?Object.keys(this.state.notes):null

        return(

            <View>
               
                <View>
                {noteIds!==null ? noteIds.map((noteId,index)=>(
                    <TouchableOpacity key={index} onPress={()=>this.goToEdit(this.state.notes[noteId],noteId)}>
                    <Text>
                        Note title: {this.state.notes[noteId].name}
                    </Text>
                    <Text>
                        Content: {this.state.notes[noteId].content}
                    </Text>
                    </TouchableOpacity>
                    
                )):<Text>There are no Notes to show</Text>}
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