  // var
  var players = [{
      // player1
      number: '0',
      name: 'Player Unknown',
      wins: 0,
      losses: 0,
      choice: '',
      image: 'assets/image/Player1.png',
      online: false
    },
    {
      // player2
      number: '0',
      name: 'Player Unknown',
      wins: 0,
      losses: 0,
      choice: '',
      image: 'assets/image/player2.png',
      online: false
    }
  ];
  // Get a reference to the database service
  var database = firebase.database();
  var gameData;
  database.ref().on("value", function (snapshot) {
    gameData = snapshot.val();
    console.log(gameData);
    console.log(gameData[0].image);
  });
  //
  //
  document.addEventListener('DOMContentLoaded', function () {
    // At the initial load and on subsequent data value changes,
    // get a snapshot of the current data.
    // This callback keeps the page updated when a value changes in firebase.
    database.ref().on('value', function (snapshot) {
      // Change the values to match the value in the database
      var gameData = snapshot.val();
      console.log('My snapshot 0 ', players[0]);
      console.log('My snapshot 1 ', players[1]);
      //
      console.log('is my game data here ', gameData);
      document.getElementById('userHNameA').innerHTML = gameData[0].name;
      document.getElementById('userHNameB').innerHTML = gameData[1].name;
    });
  });
  //
  //
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
  //
  //
  //
  $("#pRock").on('click', function (e) {
    players[0].choice = 'rock';
    console.log('player picked rock');
  });
  //
  $("#pPaper").on('click', function (e) {
    players[0].choice = 'paper';
    console.log('player picked papper');
  });
  //
  $("#pScissors").on('click', function (e) {
    players[0].choice = 'scissors';
    console.log('player picked scissors');
  });
  //
  $("#oRock").on('click', function (e) {
    players[1].choice = 'rock';
    console.log('opponent picked rock');
  });
  //
  $("#oPaper").on('click', function (e) {
    players[1].choice = 'paper';
    console.log('opponent picked papper');
  });
  //
  $("#oScissors").on('click', function (e) {
    players[1].choice = 'scissors';
    console.log('opponent picked scissors');
  });
  //
  //
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
  //
  // Whenever a user clicks the restart button
  $("#resetB").on("click", function () {
    console.log('player reset game');
    // Save new value to Firebase
    database.ref().set(players);
  });