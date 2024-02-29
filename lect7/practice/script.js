/* create a new button element . give it a text "click me", background color of red and text color of white. 
insert the button as the first element inside the body tag. */
let newBtn=document.createElement("button");
newBtn.innerText="click me!";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);


//Q2
let para = document.querySelector("p"); // Selects the first <p> element in the document
para.getAttribute("class"); // Retrieves the value of the class attribute (optional)
para.classList; // Returns a DOMTokenList representing the class attribute
para.classList.add("newclass"); // Adds the class "newclass" to the <p> element
