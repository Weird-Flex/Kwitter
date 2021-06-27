
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCSd5rWmnPUmfEn1vZafE6BkDvTkQLXP64",
      authDomain: "classtest-8eaa3.firebaseapp.com",
      databaseURL: "https://classtest-8eaa3-default-rtdb.firebaseio.com",
      projectId: "classtest-8eaa3",
      storageBucket: "classtest-8eaa3.appspot.com",
      messagingSenderId: "751460226103",
      appId: "1:751460226103:web:bfc4b2d0c6060902205bb2",
      measurementId: "G-0DZ8HQEBMC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome" + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name"+Room_names);
      row = "<div class = 'room_name' id = "+ Room_names+ "onclick='hello()'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"

      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";



}
function redirecttoroomname(name){
      alert(Henlo);
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";


}
function Hello()
{
      alert(Henlo);
}

