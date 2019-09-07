function cakes(recipe, available) {
    let howMany = Infinity;

    const ingredientsRequired = Object.keys(recipe);

    for (let i = 0; i < ingredientsRequired.length; i++) {
        const currIngredient = ingredientsRequired[i];
        
        if (!available[currIngredient] || howMany === 0) {
            return 0;
        }

        const availableOfCurrIngr = available[currIngredient];
        const requiredOfCurrIngr = recipe[currIngredient];

        if (availableOfCurrIngr / requiredOfCurrIngr < howMany) {
            howMany = Math.floor(availableOfCurrIngr / requiredOfCurrIngr);
        }
    }

    return howMany;
}

const recipe = {flour: 500, sugar: 200, eggs: 1};
const available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
const test = cakes(recipe, available);
console.log(test);

