import firebase from 'react-native-firebase'

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCQnSh5sr7ecC2uZLIW3ZkCmIprOd7RKos",
        authDomain: "rnote-68b59.firebaseapp.com",
        databaseURL: "https://rnote-68b59.firebaseio.com"
      }
)

const database = firebase.database()

export {firebaseApp}
export default database