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
const dessert = [
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

// console.log(appetizer)

// DOM-manipulation

const brunchLink = document.getElementById("brunch-link");
const lunchLink = document.getElementById("lunch-link");
const dinnerLink = document.getElementById("dinner-link");
const dessertLink = document.getElementById("dessert-link");
const beverageLink = document.getElementById("beverage-link");
const appetizerLink = document.getElementById("appetizer-link");

const menuElement = document.getElementById("menu");

function createMenuItem(itemData) {
    const { mealType, dishName, numCalories, price, image } = itemData;
    console.log(mealType);

    const item = `
        <div class="menu-item">
            <div class="menu-item__image">
                <img src=${image} alt="">
            </div>
            <h3 class="menu-item__name">${dishName}</h3>
            <p class="menu-item__type">${mealType}</p>
            <div class="menu-item__sub-info">
                <p class="menu-item__calories"><span>${numCalories}</span> cal</p>
                <p class="menu-item__price"><span> $${price}</span></p>
            </div>
            <button class="menu-item__order">Buy</button>
        </div>`

    return item;
}

// console.log(createMenuItem())


function renderMenu(element) {
    menuElement.innerHTML = element;
}

brunchLink.addEventListener("click", () => {
    const menu = createMenu("brunch", brunchData);
    renderMenu(menu)
})

lunchLink.addEventListener("click", () => {
    const menu = createMenu("lunch", lunchData);
    renderMenu(menu)
})

dinnerLink.addEventListener("click", () => {
    const menu = createMenu("dinner", dinnerData);
    renderMenu(menu)
})

dessertLink.addEventListener("click", () => {
    const menu = createMenu("dessert", dessertData);
    renderMenu(menu)
})

beverageLink.addEventListener("click", () => {
    const menu = createMenu("beverage", beverageData);
    renderMenu(menu)
})

appetizerLink.addEventListener("click", () => {
    const menu = createMenu("appetizer", appetizerData);
    renderMenu(menu)
})


function init() {
    const menu = createMenu("brunch", brunchData);
    renderMenu(menu)
}

init();






