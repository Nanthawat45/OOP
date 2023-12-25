    class Customer{
    orders=[];
    constructor(name,address){
    this.name = name;
    this.address = address;
    }
    addOrder(order){
        this.orders.push(order);
    }
}   
let customer1 = new Customer("Nanthawat","Nakhon Pathom")
console.log(customer1.name);
console.log(customer1.address);

    class Order {
        payment = null;
        orderDetails =[];
    constructor(data,status){
      this.date = date;
      this.status = status;
    }
    calcSubTota () {
        console.log("calcSubTota");
    }
    calcTax(){
        console.log("calcTax");
    }
    calcTotal(){
        console.log("calcTotal");
    }
    calcTotalWeight(){
        console.log("calcTotalWeight");
    }
    addPayment(Payment){
        this.Payment = Payment;
    }
    addOrderDetal(orderDetails){
        this.orderDetails.push(orderDetails)
    }
    
    };
    let Order1 = new Order("25/12/2566");
    Order1.calcSubTota()
    Order1.calcTax();
    Order1.calcTotal();
    Order1.calcTotalWeight();
    console.log(Order1);

    class OrderDetail{
        Item = null;
        constructor(quantity,taxStatus){
            this.quantity = quantity;
            this.taxStatus = taxStatus;
        }
    calcSubTota(){
        console.log("calcSubTota");
    }
    calcWeight(){
        console.log("calcWeight");
    }
    calcTax(){
        console.log("calcTax");
    }
    addItem(Item){
        this.item = item;
    }
    }

    class Item{
        constructor(shippingWeight,description){
            this.shippingWeight = description;
            this.description = description;
            this.price = price;
        }
        getPriceForQuantity(){
            console.log("getPriceForQuantity");
        }
        getTax(){
            console.log("getTax");
        }
        inStock(){
            console.log("inStock");
        }
    }

    class Payment{
        constructor(amount){
            this.amount = amount;
        }
    }

    class Cash extends Payment{
      constructor(amount,cashTendered) {
                super(amount)
        this.cashTendered = cashTendered;
      }
    }

    class Check extends Payment{
        constructor(amount,name,bankID){
            super(amount);
        this.name = name;
        this.bankID = bankID; 
        }
        authorized(){
            console.log("authorized");
        }
    }

    class Credit extends Payment{
      constructor(amount,number, type, expData) {
            super(amount);
        this.number = number;
        this.type = Stype;
        this.expData = expData;
      }
      authorized() {
        console.log("authorized");
      }
    }






//เข้าถึง Properties
console.log(person.firstName);  // Output : John
console.log(person.age);        // Output : 30

//เรียกใช้ Method
person.sayHello(); // Output: Hello!



let Customer = new Customer (45455);
