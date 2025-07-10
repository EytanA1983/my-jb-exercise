const books = [
    { id: 1, name: "The Hobbit", author: "J.R.R. Tolkien", price: 39.90 },
    { id: 2, name: "1984", author: "George Orwell", price: 29.90 },
    { id: 3, name: "Pride and Prejudice", author: "Jane Austen", price: 24.90 }
];

const jsonBooks = JSON.stringify(books);

alert(jsonBooks);

const items = JSON.parse(jsonBooks);

console.log("books:", books);
console.log("items:", items);
console.log("Are books and items equal?", books === items); 

for (let i = 0; i < items.length; i++) {
    console.log(`Book #${i+1}`); 
    console.log(`ID: ${items[i].id}`);
    console.log(`Name: ${items[i].name}`);
    console.log(`Author: ${items[i].author}`);
    console.log(`Price: ${items[i].price}`);
    console.log('');
   
}