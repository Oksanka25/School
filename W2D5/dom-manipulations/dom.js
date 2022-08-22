// What is the DOM -- Document OBJECT model

const populateTextToScreen = () => {
  let screen = document.querySelector(".screen");
  let text =
    "This was created by a function in the app.js file => then an ONCLICK attribute links this function to the button HTML element you've just pressed. => THATS DOM MANIPULATION! "
  screen.innerHTML = text;
};

const launchPrompt= ()=>{
    let dynamicText = prompt("Enter Something And Watch It Populate to the screen")
    let screen = document.querySelector(".screen");
    screen.innerHTML = dynamicText;
}

const launchAlert = ()=>{
    let text= "This is a function that allows you to launch an alert to an user "
    alert(text)
}

const addPic = () => {
    let screen = document.querySelector(".screen");

    let imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/I_Love_New_York.svg/1101px-I_Love_New_York.svg.png"
    
    let picture = document.createElement("img")
    picture.setAttribute("src",imgUrl)
    picture.setAttribute("class","nyPic")

    screen.append(picture)
}

const changeColor=(color)=>{
    let site = document.querySelector('body')
    site.style.backgroundColor = color
}

