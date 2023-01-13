
// Unary operator: Done
// Reduce
// Mapping
// Hoisting
// Rest operator
// What is an API
// Fetch API
// Asynchronous function using fetch api
// Challenge for the rest of the day (Group exercise)

// let numbers = [1,2,3,4,5,6];
// let sum = numbers.reduce((a,b)=> {
//    return a + b;
// })
// console.log(`Sum: ${sum}`);
// let double = numbers.map((item) =>{
//     return item * 2;
// });
// console.log("Current Array: ", numbers);
// console.log("Double: ", double);

//example//==============================================//example//

// let people = [
//     {
//         id: 1,
//         firstName: 'Tim',
//         surname: 'Henk'
//     },
//     {
//         id: 2,
//         firstName: 'James',
//         surname: 'Henk'
//     },
//     {
//         id: 3,
//         firstName: 'Bron',
//         surname: 'Henk'
//     }
// ];
// console.table(people);

// let peopleFirstNames = people.map((item) => {
//     return item.firstName;
// })
// console.log(peopleFirstNames);

// let peopleIDs = people.map((item) => {
//     return item.id;
// })
// console.log(peopleIDs);

//example//==============================================//example//
// addition(12, 32);

// function addition(a, b) {
//     console.log(a + b);   
// }


//example: rest operator//==============================================//example//

// function addition(...args) {
//     let sum = args.reduce((a, b) =>{
//         return a + b;
//     })
//     console.log(sum);   
//     console.log(args);   
// }

// addition(12, 32, 30, 60);

// Exercise
// ======
// Please create a function called "addition" that will take a rest operator.
// Inside your function, please display only the sum of numbers.

//Filter method//

// function addition(...args) {
//     let sum = args.filter(Number).reduce((a, b) => {
//         return a + b;
//     })
//     console.log(sum);
// }
// addition(12, 4, 5, 7, "Paul");

//my method//
// function addition(...args) {
//     let sum = args.reduce((a, b) => {
//         return parseInt(a + b);
//     })
//     console.log(sum);
// }
// addition(12, 4, 5, 7, "Paul");

//another method//

// function addition(...args) {
//     let sum = args.filter(Number).reduce((a,b) => {
//         return a + b;
//     })
//     console.log("Sum : ", sum);
// }
// addition(1, 2, "Joel", 3, 5);

//// Another option that works for boolean values as well:
// function addition(...args) {
//   let filtered = args.filter(item => typeof item == 'number')
//   console.log(filtered.reduce((a, b) => a + b));
// }

// fetch('data.json')
// .then((res) => {
//     return res.json();
// })
// .then((data) =>{
//     let results = data.results;
//     console.table(results);
// })

//??????????????????????????????????????????????//
// let data = fetch('data.json')
// .then((res) => {
//     return res.json()
// });
// data.then((data) => {
//     return data.results;
// })
// console.log(data);
//??????????????????????????????????????????????//

//==============================ASYNC===========================//

// async function fetchData(){
//     let data = await fetch('https://api.chucknorris.io/jokes/random');
//     return data;
// }

// fetch('https://api.chucknorris.io/jokes/random')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     let tbody = document.querySelector('tbody');
//     Object.values(data).forEach( (item)=>{
//         // if(data[item].length){
//         //     console.log(`${item}: ${data[item]}`);
//         //     tbody.innerHTML +=
//         //     `
//         //         <tr>
//         //             <td>${item}</td>
//         //             <td>${data[item]}</td>
//         //         </tr>
//         //     `
//         // }
//         console.log(item);
//     } )
// })

fetch('https://api.chucknorris.io/jokes/random')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    // let tbody = document.querySelector('tbody');
let tbody=document.querySelector('tbody')
    Object.keys(data).forEach( (item)=>{
        if(data[item].length){
            console.log(`${item}: ${data[item]}`);
            tbody.innerHTML +=
            `
                <tr>
                    <td>${item}</td>
                    <td>${data[item]}</td>
                </tr>
            `
        }
    } )
})








// API - https://dummyjson.com/products
//                                 BUILD A SHOPPING LIST
//  - Must haves:
//     * h1 tag
//     * List products including their:
//         - title
//         - brand
//         - price
//         - description
//     * Use Fetch-api to return the data from the API
//     * Loops
//     * Functions
//     * Constructor Functions
//     * Conditionals (if...else OR switch...case)
//     * Date, Math and String Objects/Methods
//     * Display date on your page in the format YYYY-MM-DD
//     * On-click AND/OR AddEventListener
//  - Objective:
//     * Your objective is to build a Shopping list app
//     * Product Page:
//         - Display all products grouped by their category
//         - Each product should have add and remove buttons that should add/remove the product to/from your shopping list
//         - Add an alert to display that your product has been added to your shopping list.
    
//     * Shopping List:
//         - Display all products added to the shopping list.
//             * show the quantity of each of the products added
//               e.g. Macaronni x5
//         - On your shopping list include the prices of products, based on the quantity of the product added.
//         - Each item row should also have a checkbox, that when checked, adds a strike through the procuct name and adds the price of the product to the total shopping list price
//             * by default the shopping list total amount should be 0 and update when a product's checkbox is checked.
//         - Each shopping list item should also include a remove button that will remove 1 from the quantity of the product on your list, as well as a button that will remove the
//           entire product from your list.











