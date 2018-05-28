  // var
  var players = [{
      // player1
      number: '0',
      name: 'Player Unknown',
      wins: 0,
      losses: 0,
      turns: 0,
      choice: '',
      image: 'assets/image/Player1.png'
    },
    {
      // player2
      number: '0',
      name: 'Player Unknown',
      wins: 0,
      losses: 0,
      turns: 0,
      choice: '',
      image: 'assets/image/player2.png'
    }

  ];
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

  var data;

  database.ref().on("value", function (snapshot) {
    // console.log(snapshot.val());
    data = snapshot.val();
    players = snapshot.val().players;

    // console.log('my data is ' + data);
  });
  //
  document.addEventListener('DOMContentLoaded', function () {
    // At the initial load and on subsequent data value changes,
    // get a snapshot of the current data. (I.E FIREBASE HERE)
    // This callback keeps the page updated when a value changes in firebase.
    database.ref().on('value', function (snapshot) {
      // Change the values to match the value in the database
      players = snapshot.val();
      console.log('My snapshot ' + players);
    });
    //
    document.getElementById('userHNameA').innerHTML = players[0].name;
    document.getElementById('userHNameB').innerHTML = players[1].name;
  });
  //player 1
  document.querySelector('#userNameA').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      players[0].name = document.querySelector('#userNameA').value; //gets the username
      console.log(players[0].name); // console her
      document.querySelector('#userHNameA').innerHTML = players[0].name; // push the username
      document.querySelector('#userHNameB').innerHTML = players[1].name; // push the username to the display
      document.getElementById('userNameA').style.visibility = 'hidden';
      //
      database.ref(0).update({
        name: players[0].name,
      });
      //
      if (players[0].name != 'Player Unknown') {
        document.querySelector("#p1Image").setAttribute('src', players[0].image);
      }
    }
  });

  // player 2
  document.querySelector('#userNameB').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      //
      players[1].name = document.querySelector('#userNameB').value; //gets the username
      console.log(players[1].name); // console her
      //
      document.querySelector('#userHNameB').innerHTML = players[1].name; // push the username
      document.querySelector('#userHNameA').innerHTML = players[0].name; // update
      document.getElementById('userNameB').style.visibility = 'hidden';
      //
      database.ref(1).update({
        name: players[1].name,
      });
      //
      if (players[1].name != 'Player Unknown') {
        document.querySelector("#p2Image").setAttribute('src', players[1].image);
      }
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



      // on webpage loaded
    // set firebase
    // database.ref().update(players);
    //