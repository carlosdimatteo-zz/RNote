import firebase from 'firebase'

firebase.initializeApp(
    {
        apiKey: "AIzaSyCQnSh5sr7ecC2uZLIW3ZkCmIprOd7RKos",
        authDomain: "rnote-68b59.firebaseapp.com",
        databaseURL: "https://rnote-68b59.firebaseio.com/"
      }
)

export const database = firebase.database()



