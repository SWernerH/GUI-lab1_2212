const library = {
    name: 'City Liberty',
    books: [],
    
    addBook (title, author, isbn) {
        const book = { title, author, isbn };
        this.books.push(book);
    },

    findBookByTitle (title) {
        return this.books.find(book => book.title === title);
    },
    lsitAllBooks () {
        this.books.forEach(book => {
            console.log(book.title)
        });
    },
    searchByAuthor (author) {
        return this.books.filter(book =>book.auther === author);
    }
};

const universityLibrary = Object.create(library);
    universityLibrary.course = [];

universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    this.course.push(courseName);
    this.addBook(title, author, isbn);
};

universityLibrary.addBook('Clean Code', 'Robert C. Martin', '978-0132350884');
universityLibrary.addBook('You Don\'t Know JS', 'Kyle Simpson', '978-1491904244');
universityLibrary.addCourseBook('CMPS 2212', 'JavaScript: The Good Parts', 'Douglas Crockford', '978-0596517748');

console.log(universityLibrary.findBookByTitle('Clean Code'));
universityLibrary.lsitAllBooks();
console.log(universityLibrary.searchByAuthor('Douglas Crockford'));
console.log('Courses:', universityLibrary.course);