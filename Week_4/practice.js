// const area = (b,h) => {
//     return b*h;
// };

// //Higher order function
// const triangeArea = (func,a,c) => {
//     let result = func(a,c);
//     return result/2;
// };
// console.log(triangeArea(area,2,4));

// //Trapezoid Area
// const var1 = (a,b,h) => {
//     let var2 = a + b;
//     return var2/h;
// };
// const trapArea = (func, x,y,z) => {
//     let var3 = func(x,y,z);
//     return var3/2;
// };
// console.log(trapArea(var1,4,6,9));

//volume=pi*r2*h

let pi = 22/7;
const area = (r,h) => {
    let v1 = r*r*h;
    return v1;
};
const volume = (func1,a,b) => {
    let v2 = func1(a,b);
    return v2 * pi;
};
console.log(volume(area,6,10));
