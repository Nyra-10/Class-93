
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA4GA8slPqnP6dX8xx36ATr7Abhob9E-g4",
      authDomain: "kwitter-6c368.firebaseapp.com",
      databaseURL: "https://kwitter-6c368-default-rtdb.firebaseio.com",
      projectId: "kwitter-6c368",
      storageBucket: "kwitter-6c368.appspot.com",
      messagingSenderId: "243615899760",
      appId: "1:243615899760:web:2093fdbabb14e4794e54b5"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
