
const colors = ["aqua","black","blue","fuchsia","gray","grey","green","lime",
"maroon","navy","purple","red","silver","teal","white","yellow"]

let counter = colors.length - 1;

const myButton = document.getElementById('myButton');
const pageBody = document.getElementById('pageBody');

myButton.addEventListener('click', () => {

  if (counter < 0) {

    counter = colors.length - 1;

  }

  if (colors[counter] === "black") {
    myButton.style.color = "white";
  } else {
    myButton.style.color = "black";
  }

  pageBody.style.backgroundColor = colors[counter];

  counter--;

});
