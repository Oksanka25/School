/*An array is a datatype that lists values (collection of elements). Arrays are an efficent and scalable way to pass logically grouped data throughout an application. Arrays allow us to write applications that process collections of data of an undetermined or growing size.*/

/*Array methods allow you to do things to an existing array*/

/*Let's practice the following array methods. Don't forget to console.log your results and run your node REPL in your terminal*/

/*================================================================*/

/*Mutator Methods allow you to modify the array*/

/* The array.pop() method removes the last element from an array and returns that element*/

/*1. Mr. Bonner (aka the Red Rocket, the Red Mamba) doesn't belong in this class of Hall Of Famers. Remove this imposter immediately and assign it to a new variable named `notHof` Console.log this new variable as well as the original list.*/

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];

var notHof = hof.pop();
console.log(notHof);
console.log(hof);

/* The array.push() adds one or more element to the end of an array and returns the new length of the array*/

/*2. You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Kanye pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/

var shoppingList = [
  "cool ranch doritos",
  "kings hawaiian sweet bread",
  "peanut butter oreos",
  "fruit loops cereal"
];

shoppingList.push("hendricks gin");
console.log(shoppingList);

/*The array.reverse() reverses the order of the element of an array in place - the first becomes the last and the last becomes the first*/

/*3. Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];

yoda.reverse();
console.log(yoda);

/*The array.shift() removes the first element from an array and returns that array*/

/*4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

var waitList = [
  "Chance the Rapper",
  "Khalid",
  "Tay-Tay",
  "Barry Manilow",
  "Piko Taro"
];

var nowServing = waitList.shift();
console.log(nowServing);
console.log(waitList);

/*The array.unshift() adds one or more elements to the front of an array and returns the new length of the array*/

/*5. Apparently, you didn't do a good job with crowd control in the previous exercise. Kanye just cut in front of everyone!. Add Kanye to the waitList array above. Console.log waitList*/

waitList.unshift("Kanye");
console.log(waitList);

/*The array.splice() adds and/or removes elements from an array.
array.splice(index, how many items to be removed)*/

/*6. As head of McDonald's New Product Division, your job is to test and approve all new menu items. In the testMenu array below, all the items are approved except for "McLinguine" and "McChar-Siu Bau". Remove these items from the list and console.log the updated testMenu.*/

var testMenu = [
  "McPizza Burger",
  "McFly Burger",
  "McLinguine",
  "McChar-Siu Bau",
  "McChop-Chae",
  "McPancit"
];

testMenu.splice(2, 2);
console.log(testMenu);

/*=============================================================*/

/*Accessor Methods do not modify the array and returns some representation of the array.*/

/*The array.concat() returns a new array comprised of this array joined with other array(s) and/or values(s).*/

/*7. Increase the peace! Your job is quash the bitter rivalry and unite both the westSide and eastSide rappers into a new array called `oneLove`. Console.log this new array.*/

var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];

var oneLove = westSide.concat(eastSide);
console.log(oneLove);

/*The array.join() joins all the elements of an array into a string.*/

/*8. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.*/

var shoe = ["just", "do", "it"];

var shoeString = shoe.join();
console.log(shoeString);

/*The array.slice() extracts a section of an array and returns a new array.
array.slice(index start, index end)*/

/*9. Some drama between you and the Kardashian's went down during last Saturday's potluck party. You are no longer on speaking terms and need to unfriend the following from your facebook:
"Yeezy", "Kimmy K" and "Lamar Odom". Unfriend these ungrateful people and assign them to a new variable named `unFriend`. Console.log this new variable.*/

var fbFriends = [
  "Khalid",
  "Yeezy",
  "Kimmy K",
  "Lamar Odom",
  "Lebron",
  "Warren Buffet"
];

var unFriend = fbFriends.slice(1, 4);
console.log(unFriend);
