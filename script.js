var editName = document.querySelector('#editname');
var nameList = ['Harry Potter','Sir Grindel','Cersei Lannister','Lord Farquad','Jane Doe'];
var number = document.querySelector("#decrease");
var count = 499;

function newName(){
  var randName = Math.floor(Math.random() * 4);
  editName.innerText = nameList[randName];
}

var user = document.querySelector('#remove');

function removeUser(){
  if(user){
  user.remove();
} else {
  console.log('no user here.');
}
  number.innerText = count;
  count--;
}

// function decreaseNumber(){
//   number.innerText = count;
//   count--;
// }