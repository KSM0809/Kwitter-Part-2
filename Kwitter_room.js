var firebaseConfig = {
    apiKey: "AIzaSyDBb31Bq2OfylyaM51hdjlPXtIwr4jTUqE",
    authDomain: "kwitter-fbbe9.firebaseapp.com",
    projectId: "kwitter-fbbe9",
    storageBucket: "kwitter-fbbe9.appspot.com",
    messagingSenderId: "645777369094",
    appId: "1:645777369094:web:e9c650b137ef05a354fb87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();