import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";
import ReadList from "../Read List/ReadList";


const ListedBooks = () => {

    const books = useLoaderData();

    const [listedBooks, setListedBooks] = useState([]);

    console.log('check', listedBooks);

    useEffect(() => {
        const storedBookIds = getStoredReadBooks();
        if (books.length > 0) {
            const booksListed = [];

            console.log(storedBookIds)

            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksListed.push(book);
                }
            }
            setListedBooks(booksListed);
        }
    }, [books])

    return (
        <div>
            <div>
                <h2>Hello World</h2>
                <div>
                    {listedBooks.length > 0 ? (
                        listedBooks.map(book => <ReadList key={book.bookId} book={book} />)
                    ) : (
                        <p>No books have been marked as read yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
    

};

export default ListedBooks;