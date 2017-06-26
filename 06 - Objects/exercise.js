// Exercise 1
let baskets = [
    { 
        firstName: 'Andrew', 
        email: 'andrew@aol.com'
        // missing: basketValue, should be set to 0
    },
    {
        email: 'question@mark.com'
        // missing: firstName and basketValue
    },
    {
        firstName: 'David',
        email: 'david@spammail.com',
        basketValue: 55
        // nothing is missing, the above values should be left intact
    }
];

baskets = baskets.map(item => Object.assign(
  {firstName: '-', basketValue: 0}, 
    item
));

console.log(baskets);

// Exercise 2
let basketProto = {
  value: 0,
  addToBasket(itemValue){
    this.value += itemValue;
  },
  clearBasket(){
    this.value = 0;
  },
  getBasketValue(){
    return this.value;
  },
  pay(){
    console.log(`${this.getBasketValue()} has been paid`);
  }
};

let myBasket = {
  items: [],
  addToBasket(itemName, itemPrice){
    this.items.push({itemName, itemPrice});
    super.addToBasket(itemPrice);
  },
  clearBasket(){
    this.items = [];
    super.clearBasket();
  },
  removeFromBasket(index){
  if(typeof index !== 'number' ||
     index < 0 ||
     index >= this.items.length){

     };
  let removedElement = this.items.splice(index, 1)[0];
  super.addToBasket(-removedElement.itemPrice);
}
}

Object.setPrototypeOf(myBasket, basketProto);


myBasket.addToBasket('Cream', 5);
myBasket.addToBasket('Cake', 8);
console.log(myBasket.getBasketValue());
console.log(myBasket.items);

myBasket.removeFromBasket(0);
console.log(myBasket.getBasketValue());
console.log(myBasket.items);

myBasket.clearBasket();
console.log(myBasket.getBasketValue());
console.log(myBasket.items);
