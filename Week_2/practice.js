// let isNightTime = true;
// // if(isNightTime){
// //     alert("It is time to sleep");
// // }else{
// //     alert("Do some work");
// // };

// isNightTime ? alert("It is time to sleep") : alert("Do some work");

// let groceryItem = "tomato";
// let bananaPrice = 8000;
// let mangoPrice = 2000;
// let orangePrice = 5000;
// let tomatoPrice = 3000;

// switch (groceryItem) {
//     case "banana":
//         alert(`bananas are ${bananaPrice} shillings`);
//         break;
//     case "mango":
//         alert(`Mangoes are ${mangoPrice} shillings`);
//         break;
//     case "orange":
//         alert(`Oranges are ${orangePrice} shillings`);
//         break;
//     case "tomato":
//         alert(`Tomatoes are ${tomatoPrice} shillings`);
//         break;
// };

// function greetWorld() {
//     alert(`Hello Uganda: Big up unnuself Uganda`);
// }
// greetWorld();

// function calculateVolume(length, width, height) {
//     let vol = length * width * height;
//     alert(`The volume is ${vol} cm cubed`);
//     return vol;
// };
// calculateVolume(9,76,5);

// function rectangleArea(length, width) {
//     if (length <= 0 || width <= 0) {
//         alert(`value for length or width cannot be 0 or less than 0`);
//         return;
//     } else {
//         let area = length * width;
//         alert(`The area is ${area}`);
//         return area;
//     };
// };
// rectangleArea(9, 17);



// const plantNeedsWater = function (day) {
//     day === 'Wednesday' ? alert(`it is ${day} water plants`) : alert(`Today is ${day} not a watering day, come back on Wednesday`);
//     return;
// };
// plantNeedsWater('Wednesday');

const plantNeedsWater = (day) => day === 'Wednesday' ? alert(`it is ${day} water plants`) : alert(`Today is ${day} not a watering day, come back on Wednesday`);

plantNeedsWater('Wednesday');