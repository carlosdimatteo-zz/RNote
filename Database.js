import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCQnSh5sr7ecC2uZLIW3ZkCmIprOd7RKos",
        authDomain: "rnote-68b59.firebaseapp.com",
        databaseURL: "https://rnote-68b59.firebaseio.com"
      }
)

const database = firebase.database()



export const getAll=()=>{
    let notes=[]
    let notesRef=database.ref('notes')
    notesRef.once('notes',(snapshot)=>{
        notes=snapshot.val()
        console.log(notes)
    })
   return notes
}




export const updateNote=(note,index)=>{
    console.log('Notes Before: '+JSON.stringify(notes))
    let updates={}
    updates['/notes/'+index]=note    
    database.ref().update(updates,(error)=>{
        if(error){
            console.log('unsuccesful operation')
            return false
        }else{
            console.log(JSON.stringify(getAll()))
            return true
        }
    })
        console.log("notes after: "+JSON.stringify(notes))
        
     
}

export const addNote =(note)=>{
    console.log('Notes Before: '+JSON.stringify(getAll()))
       let noteIndex= database.ref('notes').push().key()
        database.ref('notes/'+noteIndex).set(note,(error)=>{
            if(error){
                console.log('unsuccesful operation')
                return false
            }else{
                console.log("notes after: "+JSON.stringify(getAll()))
                return true
            }
        })
}

