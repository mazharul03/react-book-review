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
            <div className="w-10/12 mx-auto">
                <h2 className="font-bold text-3xl text-center bg-gray-100 py-7 my-6 rounded-xl">Books</h2>
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