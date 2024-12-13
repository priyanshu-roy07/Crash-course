const dataSet1 = [
    { id: 1, name: "Alice", age: 28, salary: 50000 },
    { id: 2, name: "Bob", age: 35, salary: 65000 },
    { id: 3, name: "Charlie", age: 24, salary: 48000 },
    { id: 4, name: "David", age: 42, salary: 78000 },
    { id: 5, name: "Eve", age: 30, salary: 55000 }
];

const dataSet2 = [
    { productId: 101, productName: "Laptop", price: 750, quantity: 5 },
    { productId: 102, productName: "Mouse", price: 25, quantity: 20 },
    { productId: 103, productName: "Keyboard", price: 40, quantity: 15 },
    { productId: 104, productName: "Monitor", price: 200, quantity: 8 },
    { productId: 105, productName: "Printer", price: 120, quantity: 10 }
];

// Find all employees older than 30 in dataset 1. 
let a = dataSet1.filter(emp=> emp.age > 30)
console.log(a)
// Filter out products with a price greater than 100 in dataset 2.
// Identify employees with a salary greater than 55000 in dataset 1.
// Get products with a quantity less than 10 in dataset 2.
// Find employees aged between 25 and 35 in dataset 1.
// Filter products where the total value (price * quantity) is less than 2000 in dataset 2.
// Extract employees whose names contain the letter 'a' in dataset 1.
// Find products whose names contain 'er' in dataset 2.
// Retrieve employees with even ID numbers in dataset 1.
// Filter products whose names start with 'P' in dataset 2. 

// -------------------map------------------------
// Create an array of employee names from dataset 1.
// Generate an array of product names from dataset 2.
// Create an array of ages multiplied by 2 for employees in dataset 1.
// Calculate total prices (price * quantity) for each product in dataset 2.
// Map dataset 1 to include only name and salary for each employee.
// Add a new property discountedPrice (10% off) to products in dataset 2.
// Create an array of strings in the format 'Name - Age' from dataset 1.
// Convert product names to uppercase in dataset 2.
// Generate unique codes for employees in the format 'EMP-ID' from dataset 1.
// Create an array of product names prefixed with their IDs (e.g., '101: Laptop') in dataset 2.

