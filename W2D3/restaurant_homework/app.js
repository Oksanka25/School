class Item {
    constructor(mealType, dishName, numCalories, price) {
        this.mealType = mealType
        this.dishName = dishName
        this.numCalories = numCalories
        this.price = price
    }
}
const brunch = [
    new Item('Brunch', 'Breakfast burrito', '250', 10),
    new Item('Brunch', 'Cinnamon rolls', '430', 8),
    new Item('Brunch', 'Eggs Benedict', '220', 12),
    new Item('Brunch', 'French toast', '234', 11),
    new Item('Brunch', 'Pancakes', '305', 14),
    new Item('Brunch', 'Quiche', '280', 16)
]
const lunch = [
    new Item('Lunch', 'Cucumber Sandwich', '150', 10),
    new Item('Lunch', 'White Bean & Veggie Salad', '320', 12),
    new Item('Lunch', 'Avocado Egg Salad', '420', 13),
    new Item('Lunch', 'Caprese Sandwich', '234', 12),
    new Item('Lunch', 'Whole-Wheat Veggie Wrap', '350', 17),
    new Item('Lunch', 'Couscous & Chickpea Salad', '230', 15)
]
const dinner = [
    new Item('Dinner', 'Calzones', '450', 18),
    new Item('Dinner', 'French bread pizza', '520', 17),
    new Item('Dinner', 'Chicken parmesan', '420', 16),
    new Item('Dinner', 'Meatloaf', '654', 19),
    new Item('Dinner', 'Chicken wings', '650', 17),
    new Item('Dinner', 'Beef & broccoli', '530', 15)
]
const desert = [
    new Item('Dessert', 'Apple pie', '350', 15),
    new Item('Dessert', 'Cheesecake', '330', 11),
    new Item('Dessert', 'Pecan pie', '220', 10),
    new Item('Dessert', 'Carrot cake', '255', 12),
    new Item('Dessert', 'Boston cream pie', '250', 13),
    new Item('Dessert', 'Ice-cream', '325', 9)
]
const beverage = [
    new Item('Beverage', 'Coffee', '50', 10),
    new Item('Beverage', 'Sparkling drink', '30', 11),
    new Item('Beverage', 'Orange Juice', '40', 10),
    new Item('Beverage', 'Milkshakes', '55', 12),
    new Item('Beverage', 'Lemonade', '50', 13),
    new Item('Beverage', 'Mojito', '25', 9)
]
const appetizer = [
    new Item('Appetizer', 'Bruschetta', '150', 10),
    new Item('Appetizer', 'Artichoke and Spinach Dip', '130', 11),
    new Item('Appetizer', 'Stuffed Mushrooms', '140', 10),
    new Item('Appetizer', 'Fried Calamari', '155', 12),
    new Item('Appetizer', 'Four Cheese Garlic Bread', '145', 11),
    new Item('Appetizer', 'Shrimp Scampi', '125', 15)
]

console.log(appetizer)





