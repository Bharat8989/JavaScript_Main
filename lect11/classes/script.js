class ToyotaCar {
     constructor(){
        console.log("creating new object");
        this.brand=this.brand;
     }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand = brand;
    }
}
let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
// lexus.setBrand("lexus");