// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let amountOfWater = 400;
let amountOfMilk = 540;
let amountOfCoffeeBeans = 120;
let amountOfDisposableCups = 9;
let amountOfMoney = 550;

let maxCupsOfCoffee = (water, milk, coffeeBeans) => Math.min(Math.floor(amountOfWater / water), Math.floor(amountOfMilk / milk), Math.floor(amountOfCoffeeBeans / coffeeBeans));
let espresso = () => {
    if (maxCupsOfCoffee(250, 1, 16) >= 1) {
        console.log('I have enough resources, making you a coffee!');
        amountOfWater -= 250;
        amountOfMilk -= 0;
        amountOfCoffeeBeans -= 16;
        amountOfDisposableCups--;
        amountOfMoney += 4;
        return;
    } else {
        console.log('I don\'t have enough resources!');
    }
}
let latte = () => {
    if (maxCupsOfCoffee(350, 75, 20) >= 1) {
        console.log('I have enough resources, making you a coffee!');
        amountOfWater -= 350;
        amountOfMilk -= 75;
        amountOfCoffeeBeans -= 20;
        amountOfDisposableCups--;
        amountOfMoney += 7;
        return;
    } else {
        console.log('I don\'t have enough resources!');
    }
}
let cappuccino = () => {
    if (maxCupsOfCoffee(200, 100, 12) >= 1) {
        console.log('I have enough resources, making you a coffee!');
        amountOfWater -= 200;
        amountOfMilk -= 100;
        amountOfCoffeeBeans -= 12;
        amountOfDisposableCups--;
        amountOfMoney += 6;
        return;
    } else {
        console.log('I don\'t have enough resources!');
    }
}
let printCapacity = () => {
    console.log('The coffee machine has:');
    console.log(amountOfWater + ' ml of water');
    console.log(amountOfMilk + ' ml of milk');
    console.log(amountOfCoffeeBeans + ' g of coffee beans');
    console.log(amountOfDisposableCups + ' disposable cups');
    console.log('$' + amountOfMoney + ' of money');
}

while(true) {
    let action = input('Write action (buy, fill, take, remaining, exit):');
    if (action == 'buy') {
        let selected = input('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:');
        if (selected == 1) {
            espresso();
        } else if (selected == 2) {
            latte();
        } else if (selected == 3) {
            cappuccino();
        } else if (selected == 'back') {
            continue;
        }
    } else if (action == 'fill') {
        let water = +input('Write how many ml of water you want to add:');
        let milk = +input('Write how many ml of milk you want to add:');
        let coffeeBeans = +input('Write how many grams of coffee beans you want to add:');
        let disposableCups = +input('Write how many disposable cups you want to add:');
        amountOfWater += water;
        amountOfMilk += milk;
        amountOfCoffeeBeans += coffeeBeans;
        amountOfDisposableCups += disposableCups;
    } else if (action == 'take') {
        console.log('I gave you $' + amountOfMoney);
        amountOfMoney = 0;
    } else if (action == 'remaining') {
        printCapacity();
    } else if (action == 'exit') {
        break;
    }
}