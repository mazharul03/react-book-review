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
            for (const id of storedBookIds){
                const book = books.find(book => book.id === id);
                if (book){
                    booksListed.push(book);
                }
            }
            setListedBooks(booksListed);
        }
    },[])

    return (
        <div>
            <ReadList></ReadList>
            <div>
                {
                    listedBooks.map(book => <ReadList key={book.id} book={book}></ReadList>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;