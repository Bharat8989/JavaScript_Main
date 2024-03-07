class Animal{
    constructor(name){
        this.name=name;
        console.log("object is created");

    }
    eats(){
        console.log("east constructor run");
    }
    jumps(){
        console.log("jumps statement is run");
    }
}
let a =new Animal("bharat");
console.log(a);


class User{
     constructor(name){
        //invokes the setter
        this.name= name;
     }
     get name(){
        return this.name;
     }
     set name(value){
        if (value.length < 4){
            
        
        console.log("name is too short.");
        return;
    }
     
     this._name=value;
    }
}
let user= new User("john");
console.log(user.name);
user =new User("");