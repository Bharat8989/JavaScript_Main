/* let's practice
create a H2 heading element with text -"hello hava script " append "from apna college studnets" to this text using js */
let h2= document.querySelector("h2");

console.dir(h2.innerText);
h2.innerText = h2.innerText + "form apna colege students";//

/* create 3 div common class name "box" access them and add some unique text to each of them. */
let divs = document.querySelectorAll(".box");
let index = 1;
for (div of divs) {
    div.innerText = `new unique value of ${index}`;
    index++;
}


console.log(divs[0].innerText); // Log the current innerText of the element at index 0
divs[0].innerText = "new unique value 1"; // Update the innerText of the element at index 0
divs[1].innerText = "new unique value 1"; // Update the innerText of the element at index 1
divs[2].innerText = "new unique value 1"; // Update the innerText of the element at index 2

