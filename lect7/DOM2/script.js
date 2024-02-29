let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id"); // Retrieves the value of the id attribute
console.log(id); 
div.style.backgroundColor = "red";
div.style.fontSize = "34px";

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

 div.append(newBtn); // Appends the new button to the div
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);
//delete element 
// div.remove(newBtn);//remove div sections
let newHeading= document.createElement("h1");
newHeading.innerHTML="<i> hi , i am new</i>";
document.querySelector("body").prepend(newHeading);
newHeading.remove(newHeading); 