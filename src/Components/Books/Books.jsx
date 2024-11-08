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
                <h2 className="text-4xl text-center w-11/12 font-bold">Books : {books.length}</h2>
                <div className="grid grid-cols-3 gap-6 w-11/12 mx-auto">
                    {
                        books.map(book=> <Book key={book.id} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;