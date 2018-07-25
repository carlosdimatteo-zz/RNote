import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Button,Image,ScrollView,Picker} from 'react-native'
import {database} from '../Database'
import {Theme} from './ThemeProvider'
class Home extends Component{
    static navigationOptions = {
        title: 'Home',
        header: null
      };
constructor(){
    super();
    this.state={
        notes:{},
        theme:"default",
        needUpdate:true
    }
}

    // componentWillMount(){
    //     this.setState({notes:{},needUpdate:true})
    // }

    componentDidMount(){   
        console.log('componentdidmount home')
        
        
    }

    async getData(){
        if(this.state.needUpdate){
        let notesRef=database.ref('/notes')
        await notesRef.once('value',(snapshot)=>{
            notes=snapshot.val()
            this.setState({notes:notes,needUpdate:false})
            console.log("need update? :"+this.state.needUpdate)
            console.log("///Notes from db:  "+JSON.stringify(JSON.stringify(this.state.notes)))
        })
        }else{
            return
        }
    }

    goToEdit(note,id){
        console.log("navigating to Edit "+JSON.stringify(note))
        this.setState({notes:{},needUpdate:true})
        this.props.navigation.navigate("Edit",{
            note:note,
            id:id,
            updateNote:this.UpdateNote
        })
    }
    goToAdd(){
        console.log("navigating to Add ")
        this.setState({notes:{},needUpdate:true})
        this.props.navigation.navigate("Add")
    }

    

    render(){
            this.getData()
            let noteIds = this.state.notes ?Object.keys(this.state.notes):null

        return(
            <Theme.Consumer>

            {({theme:{colors :{primary,secondary,dark,light,textDefault,textPrimary,textSecondary}},changeTheme})=>(
                <View>
                <ScrollView>
            <View style={{flex: 1,flexDirection: 'column'}}>
                <View style={{marginTop:50,justifyContent: 'center',alignItems: 'center'}}>
                <Image source={require('./../img/rnote2.png')}/>
                </View>
        
                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                
                {noteIds!==null ? noteIds.map((noteId,index)=>(
                    
                    <TouchableOpacity key={index} onPress={()=>this.goToEdit(this.state.notes[noteId],noteId)} style={{width:140,height:120, margin:5, padding:10, overflow:'hidden',borderRadius:5}}>
                    <View  style={{ backgroundColor: primary,padding:10,width:140,height:120,borderRadius:5}}>
                    
                        <Text style={{color: textDefault ,fontWeight:'bold', fontSize:20}}>
                            {this.state.notes[noteId].name}
                        </Text>
                        <Text style={{color:textSecondary ,fontSize:15}}>
                            {this.state.notes[noteId].content}
                        </Text>
                        </View>
                    </TouchableOpacity>
                     
                )):<Text>There are no Notes to show</Text>}
                </View>
                
                <Button onPress={()=>this.goToAdd()} 
                title="Add Note"
                color={secondary}
                />
                <Picker
                    selectedValue={this.state.theme}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => {this.setState({theme:itemValue});changeTheme(itemValue)}}>
                    <Picker.Item label="Default " value="default" />
                    <Picker.Item label="Sunny" value="sun" />
                    <Picker.Item label="Blue" value="blue" />
                    <Picker.Item label="Night Mode" value="night" />
                    </Picker>

                </View>
            </ScrollView>
            
            </View>

                

            )}
            
            
        </Theme.Consumer>
            
        )


    }


}

export default Home