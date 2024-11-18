import { useEffect, useState } from "react";
import Book from "../Book/Book";
const Books = () => {

    const [books, setBooks]= useState([]);

    useEffect ( () =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-4xl text-center w-11/12 font-bold">Books</h2>
                <div className="grid grid-cols-3 gap-5 mt-6 mb-5 w-11/12 mx-auto">
                    {
                        books.map(book=> <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;