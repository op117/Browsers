const greenGrocer = {
  buyApples: function(quantity) {
    return quantity + ' apples';
  },
  buyTomatoes: function(quantity) {
    return quantity + ' tomatoes';
  },
  buyCauliflower: function(quantity) {
    return quantity + ' cauliflower';
  },
};

const cheeseShop = {
  buyCheese: function(type, weight) {
    this.cutCheese(type, weight);

    return weight + 'gr ' + type + ' cheese';
  },

  cutCheese: function(type, weight) {
    const stopTime = Date.now() + 100;
    while (Date.now() < stopTime);
  },
};

const bakery = {
  buyBread: function(breadReadyCallback, type, quantity) {
    setTimeout(function() {
      breadReadyCallback(quantity + ' ' + type);
    }, 1000);
  },
};

function visitGreengrocer() {
  console.log('=== Greengrocer ===');

  const beforeBuy = Date.now();

  const fruitsAndVegetables = [
    greenGrocer.buyApples(2),
    greenGrocer.buyTomatoes(2),
    greenGrocer.buyCauliflower(1),
  ];

  const timeTaken = (Date.now() - beforeBuy).toFixed(2);

  console.log('You bought: ', fruitsAndVegetables);
  console.log('This took: ' + timeTaken + 'ms\n');
}

function visitCheeseShop() {
  console.log('=== Cheese Shop ===');
  const beforeBuy = Date.now();

  const cheese = cheeseShop.buyCheese('belegen', 500);

  const timeTaken = (Date.now() - beforeBuy).toFixed(2);

  console.log('You bought: ' + cheese + '');
  console.log('This took: ' + timeTaken + 'ms\n');
}

function visitBakery() {
  console.log('=== Bakery ===');
  const beforeBuy = Date.now();

  const breadReady = function(bread) {
    const timeTaken = (Date.now() - beforeBuy).toFixed(2);
    console.log('--- Callback from Bakery ---');
    console.log('You bought: ' + bread + '');
    console.log('This took: ' + timeTaken + 'ms\n');
  };

  bakery.buyBread(breadReady, 'fijn volkoren', 1);
  console.log(`We'll call you back!\n`);
}

visitGreengrocer(); // ?.
/*
=== Greengrocer ===
You bought:  [ '2 apples', '2 tomatoes', '1 cauliflower' ]
This took: 0.00ms

greenGrocer( ) is executed synchronously.
buyApples, buyTomatoes, buyCauliflower are called sequentially.
*/

visitBakery(); // ?.
/*
=== Bakery ===
We'll call you back!

--- Callback from Bakery ---
You bought: 1 fijn volkoren
This took: 1004.00ms

bakery( ) is asynchronous and runs with a 1 second delay
*/

visitCheeseShop(); // ?.
/*
=== Cheese Shop ===
You bought: 500gr belegen cheese
This took: 100.00ms

cutCheese( ) delays 100ms before completing the purchase
*/