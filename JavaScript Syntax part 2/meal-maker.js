const menu = {
  _meal: '', // should be an empty string not even a space because than it is not empty 
  _price: 0,

  set meal (mealToCheck){
    if (typeof mealToCheck === "string" && mealToCheck != " " ){
        this._meal = mealToCheck; // i removed the return statement for clarity but i placed there for understanding i also added the && mealToCheck != " " to check if the string is not empty and therefore it should always have something and never be empty also this code:   && mealToCheck != "" would allow us to insert " " as a value because that is something so to stop this i just added a space which checks that there is atleast a number or character there 
    }
  } ,
  set price (priceToCheck){
    if (typeof priceToCheck === "number" && priceToCheck > 0){
        this._price = priceToCheck; // i removed the return statement for clarity but i placed there for understanding
    }
  } ,
  get todaysSpecial(){
    if(this._meal && this._price ){
        return `Today's Special is ${this._meal} for $${this._price}!`
    } else {
        return "Meal or price was not set correctly!"
    }    
  }

};

menu.meal = "Fish and Chips" ;
menu.price = 5 ;
console.log(menu.todaysSpecial);
