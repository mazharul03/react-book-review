import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";
import ReadList from "../Read List/ReadList";


const ListedBooks = () => {

    const  books = useLoaderData();

    const [listedBooks, setListedBooks] = useState([]);

    useEffect(() =>{
        const storedBookIds = getStoredReadBooks();
        if(books.length > 0){
            const booksListed = [];

            console.log(books, storedBookIds, booksListed)

            for (const id of storedBookIds){
                const book = books.find(book => book.bookId === id);
                if (book){
                    booksListed.push(book);
                }
            }
            setListedBooks(booksListed);
        }
    },[])

    return (
        <div>
            {listedBooks.map((book) => (
                <ReadList key={book.id} book={book} />
            ))}
        </div>
    );
    
};

export default ListedBooks;