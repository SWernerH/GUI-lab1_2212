const book ={
    title : "JavaScript: The Good Parts",
    author : "Douglas Crockford",
    year : 2008,
    isbn : "978-0596517748"
};

function displayProperty(obj, propName) {
    console.log(obj[propName]);
}

function updateProperty(obj, propName, newValue) {
    obj[propName] = newValue;
}

// Example usage:
displayProperty(book, 'title'); // Output: JavaScript: The Good Parts
updateProperty(book, 'year', 2020);
displayProperty(book, 'year'); // Output: 2020