/* event listeners 
node.addEventListener(event ,callback)
node.removeEventListerner(event ,callback)
note --> the callback reference should be same to remove */

let btn1 = document.querySelector("#btn1"); // Corrected selector
btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked");
    console.log(evt);
    console.log(evt.type);
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});

let div= document.querySelector(".div1"); // Corrected selector
