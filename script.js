var editName = document.querySelector('#editname');
var nameList = ['Harry Potter', 'Sir Grindel', 'Jane Lannister', 'Lord Farquad'];
var number = document.querySelector('#decrease');
var number2 = document.querySelector('#increase');
var user = document.querySelector('#remove');
var usertwo = document.querySelector('#remove2');

function newName() {
  if (editName.innerText == 'Jane Doe') {
    editName.innerText = nameList[0];
  } else if (editName.innerText == nameList[0]) {
    editName.innerText = nameList[1];
  } else if (editName.innerText == nameList[1]) {
    editName.innerText = nameList[2];
  } else if (editName.innerText == nameList[2]) {
    editName.innerText = nameList[3];
  } else {
    editName.innerText = 'Jane Doe';
  }
}

function acceptUser() {
  user.remove();
  number.innerText--;
  number2.innerText++;
}

function denyUser() {
  user.remove();
  number.innerText--;
}

function acceptUser2() {
  usertwo.remove();
  number.innerText--;
  number2.innerText++;
}

function denyUser2() {
  usertwo.remove();
  number.innerText--;
}