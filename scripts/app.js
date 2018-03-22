console.log("hello.");

//Find/retrieve an element
const container = document.querySelector('#container');
console.log(container);

const secondImg = document.querySelector('#second-img')
console.log(secondImg);

const infoElements = document.querySelectorAll('.info')
console.log(infoElements);

//Alter an element's HTML
const firstP = document.querySelector('p')
firstP.innerText = 'Jamboree sandwich at the Jambo-ree'

firstP.innerHTML = '<strong> Put your hand where I can see \'em, so they look like 12pm</strong>'

//Create a new element
const newDiv = document.createElement('div');
console.log(newDiv);

//Append an element to the body
document.body.appendChild(newDiv);

//Append an element to a retrieved element
const firstSection = document.querySelector('section');

const someP = document.createElement('p');

firstSection.appendChild(someP);

//Create an element and give it an attribute before appending it

const newImg = document.createElement('img');

newImg.src = "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzkzNWIwYjZjOTkzMWQ1MTdkOV80OTA1Mzc0NjE3X2JjOGYwYjNjOTJfYi5qcGciXSxbInAiLCJ0aHVtYiIsIngzOTA-Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdXQ/935b0b6c9931d517d9_4905374617_bc8f0b3c92_b.jpg";

document.body.appendChild(newImg);


//Create an element and give it an id
const newSection = document.createElement('section')

newSection.id = "butterfly"

document.body.appendChild(newSection);

//Get a list of the classes given to an element
const sectionClasses = firstSection.classList;

//Add a class to an element
firstSection.classList.add("wdi-remote-gizmo");

//Remove a class from an infoElements
firstSection.classList.remove("wdi-remote-gizmo");
