import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";
import ReadList from "../Read List/ReadList";
import WishList from "../Wishlist/WishList";


const ListedBooks = ({readList, wishList}) => {

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
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Architecto</span>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Corrupti</span>
                    </a>
                </div>
                {/* <div>
                    {readList.length > 0 ? (
                        readList.map(book => <ReadList key={book.bookId} book={book} />)
                    ) : (
                        <p>No books have been marked as read yet.</p>
                    )}
                </div>
                <div>
                    {wishList.length > 0 ? (
                        wishList.map(book => <WishList key={book.bookId} book={book} />)
                    ) : (
                        <p>No books have been marked as read yet.</p>
                    )}
                </div> */}
            </div>
        </div>
    );


};

export default ListedBooks;