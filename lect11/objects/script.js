// const student ={
//     fullName :"Bharat Kadam",
//     marks:89.4,
//     printMarks:function(){
//         console.log("marks =", this.marks);


//     },

// };
const employee = {
    calcTax()
    {
        console.log("tax rate is 10%");
    },

};
const karnaArjun = {
    salary :54000,
    calcTax(){
        console.log("tax rate is 20%");
    },

};
karnaArjun__proto__ = employee;