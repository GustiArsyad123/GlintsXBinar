//declaration of variable
const vegetables = ["tomato", "broccoli", "kale", "cabbage", "apple"];

//for
for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i] !== 'apple') {
        console.log(`${vegetables[i]} is a healthy food, it's definitely worth to eat.`);
    } else {
        console.log(`${vegetables[i]} not a vegetable.`);
    }
}
