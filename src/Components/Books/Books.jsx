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
            <div className="text-center">
                <h2 className="text-4xl font-bold">Books : {books.length}</h2>
                <div>
                    {
                        books.map(book=> <Book key={book.id} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;