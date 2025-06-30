//The Document Object Model

// console.log(document);
// // console.log(window);
// //DOM methods
// //C
// console.dir(document.body);
// document.getElementById(); //Selects element by ID uses (#)
// document.getElementsByClassName //selects an element by class.
// document.getElementsByTagName //Selects html tags i.e. p, h1, h2 etc
// document.querySelector(); //Selects the first matching css class. It can be used for ID's and tags
// document.querySelectorAll(); //Selects all matching elements
// const allTitles = document.getElementsByTagName('h1');
// console.log(allTitles);
// console.log(allTitles[0]);
// for (let i=0; i<allTitles.length; i++){
//     console.log(allTitles[i]);
// } 
// const firstTitle = document.getElementById('heading1');


// // const firstTitle = document.querySelector('.title');
// const firstTitle = document.querySelectorAll('#title');
const allTitles = document.querySelectorAll('h1');
allTitles[3].className = 'title';
allTitles[3].textContent = 'This is the fourth Heading'
allTitles[3].style.color = 'green' 
allTitles[3].style.fontSize = '50px' 
console.log(allTitles);

// [h1,h1,h1,h1]
//R
//U
//D