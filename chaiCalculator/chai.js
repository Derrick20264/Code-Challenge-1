function calculateChaiIngredients(numberOfCups) {
  const water = 200 * numberOfCups;
  const milk = 50 * numberOfCups;
  const tea = numberOfCups;
  const sugar = 2 * numberOfCups;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water} ml
Milk: ${milk} ml
Tea Leaves (Majani): ${tea} tablespoons
Sugar (Sukari): ${sugar} teaspoons

Enjoy your Chai Bora!`);
}

const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
calculateChaiIngredients(Number(cupsInput));

