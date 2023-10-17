    //    OBJECT


// Question 1: 
// Make 3 Objects like:
// Car 1: {Make: Honda Model: Civic Year: 2019}
// Car 2: {Make: Toyota Model: Camry Year: 2020}
// Car 3: {Make: Ford Model: Mustang Year: 2018} And output them nicely.


let car1={
    Make: "Honda" ,
    Model: "Civic", 
    Year: 2019
    
}
let car2={
    Make: "Toyota" ,
    Model: 'Camry' ,
    Year: 2020
}

let car3={
    Make: "Ford", 
    Model: "Mustang",
    Year : 2018
    
}

    let output1=`This Car is made by ${car1.Make} ,model of car is ${car1.Model} in year ${car1.Year}`;
    let output2=`This Car is made by ${car2.Make} ,model of car is ${car2.Model} in year ${car2.Year}`;
    let output3=`This Car is made by ${car3.Make} ,model of car is ${car3.Model} in year ${car3.Year}`;
    console.log(output1);
    console.log(output2);
    console.log(output3);



// Question 2
// Part 1
// Write a program that prompts the user to enter the details of a book - title,author, and number of pages - and stores the data in an object. Then, output the details of the book to the console.

let title=prompt("Enter the Title of book: ")
let author=prompt("Enter the Auther of book: ")
let pages=prompt("Enter the No.of pages in book: ")

let book={
    book_title: title,
    book_author: author,
    book_pages: pages

 }
console.log(`The details of book are as follows : The Title of book is ${title} and the book is written by ${author} having ${pages} pages.`)



// Part 2
// Write a function called findOldestPerson that takes in an array of people (each person represented as an object with properties for name and age) as a parameter and returns the name of the oldest person in the array.

var array=[
    {
        name: "alex",
        age :30

    },
    {
        name: "Sam",
        age:24

    },
    {
        name:"Alina",
        age: 29

    },
    {
        name: "Sofia",
        age: 67

    },
    {
        name:"Daniel",
        age:78

    },
    {
        name:"John",
        age:35

    }

]   
const findOldestPerson=(array)=>{
    let oldestPerson=0;
    for(let i=0;i<array.length;i++){
        if(array[i].age> oldestPerson){
            oldestPerson=array[i].age;
            oldestname=array[i].name;

        }
        

    }
    return (oldestname);

}
result=findOldestPerson(array);
console.log("The oldest persons name is "+result);


// Part 3
// Write a program that prompts the user to enter the details of three movies -title, director, and year - and stores the data in an array of objects. Then, sort the array by the year and output the details of each movie to the console.

    
let title_1=prompt("Enter the Title of book: ")
let director_1=prompt("Enter the director of book: ")
let year_1=parseInt(prompt("Enter the No.of pages in book: "))
let title_2=prompt("Enter the Title of book: ")
let director_2=prompt("Enter the director of book: ")
let year_2=parseInt(prompt("Enter the No.of pages in book: "))
let title_3=prompt("Enter the Title of book: ")
let director_3=prompt("Enter the director of book: ")
let year_3=parseInt(prompt("Enter the No.of pages in book: "))


let book=[
    {
    book_title: title_1,
    book_director: director_1,
    book_year: year_1
    },
    {
    book_title: title_2,
    book_director: director_2,  
    book_year: year_2
    },
    {
    book_title: title_3,
    book_director: director_3,
    book_year: year_3
    }
]

let compare=(a,b)=>{
    return a.book_year-b.book_year;
    
}

book.sort(compare);

console.log(book);


// Part 4
// Write a function called calculateTotalPrice that takes in an array of items (each item represented as an object with properties for name and price) and returns the total price of all items in the array.

const items=[
    {
        name: "shampoo",
        price: 460
    },
    {
        name: "Wheat",
        price: 1680
    },
    {
        name: "Oil",
        price: 709
    },
    {
        name: "lolipops",
        price: 362
    },
    {
        name: "biscuit",
        price: 80
    },
    {
        name: "chocolate",
        price: 260
    },
]

const calculateTotalPrice=(h1,h2)=>{
    let total=(h1 + h2.price)
    return total;
}
let result=items.reduce(calculateTotalPrice,0);
console.log(`Your total price is :${result}`);













