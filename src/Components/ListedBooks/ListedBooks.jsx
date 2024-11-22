import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";
import ReadList from "../Read List/ReadList";
import WishList from "../Wishlist/WishList";


const ListedBooks = ({readList, wishList}) => {

    const [tabIndex, setTabIndex] = useState(0)

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
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap  dark:text-gray-800">
                    <Link to='' className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                        <span> Read Books</span>
                    </Link>
                    <Link to={'wishList'} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                        <span> Wishlist Books</span>
                    </Link>
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