  // var
  var players1 = {
    number: '0',
    name: name,
    wins: 0,
    losses: 0,
    turns: 0,
    choice: ''
    // player a
  };
  var players2 = {
    number: '0',
    name: name,
    wins: 0,
    losses: 0,
    turns: 0,
    choice: ''
    // player a
  };
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
  var database = firebase.database();
  //
  document.addEventListener('DOMContentLoaded', function () {
    // on webpage loaded
    database.ref().on('value', function (snapshot) {
      console.log(snapshot.val());
    });
  });
  //player 1
  document.querySelector('#userNameA').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      players1.name = document.querySelector('#userNameA').value; //gets the username
      console.log(players1.name); // console her
      document.querySelector('#userHNameA').innerHTML = players1.name; // push the username to the display
      document.getElementById('userNameA').style.visibility = 'hidden';
      //
      database.ref().set({
        userA: players1.name,
      });
    }
  });

  // player 2
  document.querySelector('#userNameB').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      players2.name = document.querySelector('#userNameB').value; //gets the username
      console.log(players2.name); // console her
      document.querySelector('#userHNameB').innerHTML = players2.name; // push the username to the display
      document.getElementById('userNameB').style.visibility = 'hidden';
      //
      database.ref().set({
        userB: players1.name,
      });
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