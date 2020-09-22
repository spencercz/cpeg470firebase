// Initialize Firebase

var firebaseConfig = {
    apiKey: "AIzaSyBc4YPodSOW5uFSJ8GtlX4YHceT8vUAbas",
    authDomain: "cpeg470-spencer-game.firebaseapp.com",
    databaseURL: "https://cpeg470-spencer-game.firebaseio.com",
    projectId: "cpeg470-spencer-game",
    storageBucket: "cpeg470-spencer-game.appspot.com",
    messagingSenderId: "209011549042",
    appId: "1:209011549042:web:dbfbae09cc0c09035373eb"
  };
var google_provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if (!!user){
    alert(`${user.displayName || user.email}`);
  }
});

$("#loginemail").click(()=>{
  firebase.auth().signInWithEmailAndPassword($("#email").val(), $("#password").val()).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
});
$("#register").click(()=>{
  let pwd1 = $("#password").val();
  let pwd2 = $("#password2").val();
  if (pwd1 == pwd2){
    firebase.auth().createUserWithEmailAndPassword($("#email").val(), $("#password").val()).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  } else {
    alert("passwords don't match");
  }
});
$("#reset").click(()=>{
  firebase.auth().sendPasswordResetEmail($("#email").val());
});
$("#clear").click(()=>{
  $("#email").val("");
  $("#password").val("");
  $("#password2").val("");
});
