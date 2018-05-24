  // var
  var name = '';
  var database = firebase.database();
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAu-uybDqc5UnLbfS0UUiuBKYxttRfYSUQ",
    authDomain: "rps-multiplayer-ca.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-ca.firebaseio.com",
    projectId: "rps-multiplayer-ca",
    storageBucket: "rps-multiplayer-ca.appspot.com",
    messagingSenderId: "147823995701"
  };
  firebase.initializeApp(config);

  //
  document.addEventListener('DOMContentLoaded', function () {
    // on webpage loaded
  });
  //
  document.querySelector('#userNameA').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      name = document.querySelector('#userNameA').value; //gets the username
      console.log(name); // console her
      document.querySelector('#userHNameA').innerHTML = name; // push the username to the display
      document.getElementById('userNameA').style.visibility = 'hidden';

    }
  });

  //
  // var myKey = 'some API key';
  // var queryURL = '';
  // //
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).done(function (response) {
  //   console.log(response);
  // });
  //
  // Game Logic
  var choices = [];