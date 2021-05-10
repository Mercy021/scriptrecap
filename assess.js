 class Mkulima{
constructor(product,vendors,farm){
    this.product=[];
    this.vendors=[];
    this.farm=[];
}
}
 class Addfarm extends Mkulima{
     constructor(farmid,name,phone,address,farm){
         super(farmid,name,phone,address,farm)
         console.log(this.farm.push(farmid,name,phone,address,farm))
     
     
         
     }
    }
 class removeFarm(farmid);{
    let farm = this.getFarm(farmid)
    let index = this.farms.indexOf(farmid)    
    return this.farms.splice(index, 1);
 


}


//updateFarm()
 let farm={
     farmid:234,
    name:'Max',
    number:'0712345678',
     address:1244,
     set setthatfarm(updatefarm){
         return this.setthatfarm=updatefarm;
     }
 }


    
//getFarm(farmid)
let Farm={
    farmid:2341,
    name:'Ann',
    number:'0712345671',
    address:244,
    get getthatfarm(){
        return this.farmid;

}

}


class Product extends Mkulima{
    constructor(id,name,price){
        super(id,name,price)
        console.log(this.product.push(id,name,price))
    }


updateProduct(){
let product={
    farmid:1234,
    name:'John',
    number:'0709876543',
    address:475,
    set setthatproduct(updateproduct){
        return this.setthatproduct=updateproduct;
    }
    

}
}
removeProduct(productId){
        let product = this.getProduct(productId);
        let index = this.products.indexOf(productId);
        return this.products.splice(index, 1);


    }



printProducts() {
    for (let object of this.products) {
        console.log([object.name + "," + object.price])
    }
}
calculateOrderCost(productId, quantity){
    let cost = this.products.find(cost => cost.productId == productId)
    return cost.price * quantity

}
}
let kulima = new Addfarm([{
    farmId: "678",
    farmName: " leo farm",
    farmer: "Wali",
    phone: " 0723476884",
    address: "325"
    

 }
 ],)
let order = new Mkulima([{
    farmId: "678",
    farmName: " panda farm",
    farmer: "John",
    phone: " 0723494334",
    address: "345"
}
], [{
    productId: "234",
    name: "beans",
    price: 2300
}]);
console.log(order.addFarm("768", "kilimo ", " Ola", " 0734567890", " 789"));
console.log(order.getFarm("768"));
console.log(order.removeFarm("768"));
console.log(order.updateFarm("534", "panda farm", "Ken", "0789101212", "894"));
console.log(order.addProduct("432", "tomatoes", 1700));
console.log(order.getProduct("432"));
console.log(order.removeProduct("432"));
console.log(order.updateProduct("432", "kales", 1500));
console.log(order.printProducts());
console.log(order.calculateorderCost("232", 5))










    



