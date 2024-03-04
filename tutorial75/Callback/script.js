console.log("bharat is hacker");
console.log("suraj is a heaker");
setTimeout(() =>{
    console.log("i am inside settimeout");
},0);
console.log("the end");

const  callback=(arg) => {
    console.log(arg);
}
const loadScript=(src ,callback) =>{
    let sc = document.createElement("script");
    sc.src=src;
    // sc.onload =((params) => { //anfn => arrow funtions shotcut
      
    // }
    // )
    sc.onload=callback("bharat");
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js",callback);
// console.log(arg);
// fn("firstarg",()=>){
//     WebTransportDatagramDuplexStream("secondarg",()=>)
// }