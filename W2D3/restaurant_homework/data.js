class Item {
    constructor(mealType, dishName, numCalories, price, image) {
        this.mealType = mealType
        this.dishName = dishName
        this.numCalories = numCalories
        this.price = price
        this.image = image
    }
}

export const brunchData = [
    new Item('Fast food', 'Breakfast burrito', '250', 10),
    new Item('Fast food', 'Cinnamon rolls', '430', 8),
    new Item('Fast food', 'Eggs Benedict', '220', 12),
    new Item('Fast food', 'French toast', '234', 11),
    new Item('Fast food', 'Pancakes', '305', 14),
    new Item('Fast food', 'Quiche', '280', 16)
]

export const lunchData = [
    new Item('Fast food', 'Cucumber Sandwich', '150', 10),
    new Item('Fast food', 'White Bean & Veggie Salad', '320', 12),
    new Item('Fast food', 'Avocado Egg Salad', '420', 13),
    new Item('Fast food', 'Caprese Sandwich', '234', 12),
    new Item('Fast food', 'Whole-Wheat Veggie Wrap', '350', 17),
    new Item('Fast food', 'Couscous & Chickpea Salad', '230', 15)
]

export const dinnerData = [
    new Item('Fast food', 'Calzones', '450', 18),
    new Item('Fast food', 'French bread pizza', '520', 17),
    new Item('Fast food', 'Chicken parmesan', '420', 16),
    new Item('Fast food', 'Meatloaf', '654', 19),
    new Item('Fast food', 'Chicken wings', '650', 17),
    new Item('Fast food', 'Beef & broccoli', '530', 15)
]

export const dessertData = [
    new Item('Dessert', 'Apple pie', '350', 15),
    new Item('Dessert', 'Cheesecake', '330', 11),
    new Item('Dessert', 'Pecan pie', '220', 10),
    new Item('Dessert', 'Carrot cake', '255', 12),
    new Item('Dessert', 'Boston cream pie', '250', 13),
    new Item('Dessert', 'Ice-cream', '325', 9)
]

export const beverageData = [
    new Item('Healthy food', 'Coffee', '50', 10),
    new Item('Healthy food', 'Sparkling drink', '30', 11),
    new Item('Healthy food', 'Orange Juice', '40', 10),
    new Item('Healthy food', 'Milkshakes', '55', 12),
    new Item('Healthy food', 'Lemonade', '50', 13),
    new Item('Healthy food', 'Mojito', '25', 9)
]

export const appetizerData = [
    new Item('Healthy food', 'Bruschetta', '150', 10),
    new Item('Healthy food', 'Artichoke and Spinach Dip', '130', 11),
    new Item('Healthy food', 'Stuffed Mushrooms', '140', 10),
    new Item('Healthy food', 'Fried Calamari', '155', 12),
    new Item('Healthy food', 'Four Cheese Garlic Bread', '145', 11),
    new Item('Healthy food', 'Shrimp Scampi', '125', 15)
]