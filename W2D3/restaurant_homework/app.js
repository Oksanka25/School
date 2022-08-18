class Item {
    constructor(mealType, dishName, numCalories, price, image) {
        this.mealType = mealType
        this.dishName = dishName
        this.numCalories = numCalories
        this.price = price
        this.image = image
    }
}

const PLUG_IMG = './images/food.jpg';

// Data
const brunchData = [
    new Item('Brunch', 'Breakfast burrito', '250', 10, './images/burrito.jpg'),
    new Item('Brunch', 'Cinnamon rolls', '430', 8, './images/cinnamon-rolls.jpg'),
    new Item('Brunch', 'Eggs Benedict', '220', 12, PLUG_IMG),
    new Item('Brunch', 'French toast', '234', 11, PLUG_IMG),
    new Item('Brunch', 'Pancakes', '305', 14, PLUG_IMG),
    new Item('Brunch', 'Quiche', '280', 16, PLUG_IMG)
]

const lunchData = [
    new Item('Lunch', 'Cucumber Sandwich', '150', 10, PLUG_IMG),
    new Item('Lunch', 'White Bean & Veggie Salad', '320', 12, PLUG_IMG),
    new Item('Lunch', 'Avocado Egg Salad', '420', 13, PLUG_IMG),
    new Item('Lunch', 'Caprese Sandwich', '234', 12, PLUG_IMG),
    new Item('Lunch', 'Whole-Wheat Veggie Wrap', '350', 17, PLUG_IMG),
    new Item('Lunch', 'Couscous & Chickpea Salad', '230', 15, PLUG_IMG)
]

const dinnerData = [
    new Item('Dinner', 'Calzones', '450', 18, PLUG_IMG),
    new Item('Dinner', 'French bread pizza', '520', 17, PLUG_IMG),
    new Item('Dinner', 'Chicken parmesan', '420', 16, PLUG_IMG),
    new Item('Dinner', 'Meatloaf', '654', 19, PLUG_IMG),
    new Item('Dinner', 'Chicken wings', '650', 17, PLUG_IMG),
    new Item('Dinner', 'Beef & broccoli', '530', 15, PLUG_IMG)
]

const dessertData = [
    new Item('Dessert', 'Apple pie', '350', 15, PLUG_IMG),
    new Item('Dessert', 'Cheesecake', '330', 11, PLUG_IMG),
    new Item('Dessert', 'Pecan pie', '220', 10, PLUG_IMG),
    new Item('Dessert', 'Carrot cake', '255', 12, PLUG_IMG),
    new Item('Dessert', 'Boston cream pie', '250', 13, PLUG_IMG),
    new Item('Dessert', 'Ice-cream', '325', 9, PLUG_IMG)
]

const beverageData = [
    new Item('Beverage', 'Coffee', '50', 10, PLUG_IMG),
    new Item('Beverage', 'Sparkling drink', '30', 11, PLUG_IMG),
    new Item('Beverage', 'Orange Juice', '40', 10, PLUG_IMG),
    new Item('Beverage', 'Milkshakes', '55', 12, PLUG_IMG),
    new Item('Beverage', 'Lemonade', '50', 13, PLUG_IMG),
    new Item('Beverage', 'Mojito', '25', 9, PLUG_IMG)
]

const appetizerData = [
    new Item('Appetizer', 'Bruschetta', '150', 10, PLUG_IMG),
    new Item('Appetizer', 'Artichoke and Spinach Dip', '130', 11, PLUG_IMG),
    new Item('Appetizer', 'Stuffed Mushrooms', '140', 10, PLUG_IMG),
    new Item('Appetizer', 'Fried Calamari', '155', 12, PLUG_IMG),
    new Item('Appetizer', 'Four Cheese Garlic Bread', '145', 11, PLUG_IMG),
    new Item('Appetizer', 'Shrimp Scampi', '125', 15, PLUG_IMG)
]

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

function createMenu(title, itemsData) {
    let items = "";

    itemsData.forEach(el => items += createMenuItem(el));

    const menu = `
      <div id="menu" class="menu">
            <h1 class="menu-title">${title}</h1>
            <div class="menu-items">
                ${items}
            </div>
        </div>
    `

    return menu;
}

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