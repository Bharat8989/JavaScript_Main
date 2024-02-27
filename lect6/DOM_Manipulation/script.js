let heading = document.getElementById("heading");
console.dir(heading);

let class1 = document.getElementsByClassName("heading");
console.dir(heading);

console.log(heading); // This line seems to have a typo, it should be console.log instead of console.logf

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//Query selector 
 let elements=document.querySelector("p");
 console.log(elements);
 let all= document.querySelectorAll("p");
 console.log(all);

 let firstbutton=document.querySelector("#button");
 console.log(firstbutton);