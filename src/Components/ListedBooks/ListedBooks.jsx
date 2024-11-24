import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadBooks, getStoredWishList } from "../../utility/localstorage";
import ReadList from "../Read List/ReadList";
import WishList from "../Wishlist/WishList";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0); // 0: Read Books, 1: Wishlist
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);

  useEffect(() => {
    if (Array.isArray(books) && books.length > 0) {
      // Filter Read Books
      const storedReadBookIds = getStoredReadBooks();
      const filteredReadBooks = books.filter((book) =>
        storedReadBookIds.includes(book.bookId)
      );
      setReadBooks(filteredReadBooks);

      // Filter Wishlist Books
      const storedWishListIds = getStoredWishList();
      const filteredWishListBooks = books.filter((book) =>
        storedWishListIds.includes(book.bookId)
      );
      setWishListBooks(filteredWishListBooks);
    }
  }, [books]);

  return (
    <div>
      <div className="w-10/12 mx-auto">
        <h2 className="font-bold text-3xl text-center bg-gray-100 py-7 my-6 rounded-xl">
          Books
        </h2>
        <div className="flex items-center overflow-x-auto overflow-y-hidden flex-nowrap dark:text-gray-800">
          {/* Toggle Tabs */}
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Read Books</span>
          </Link>
          <Link
            to="wishList"
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Wishlist Books</span>
          </Link>
        </div>

        {/* Conditional Rendering Based on Tab */}
        <div>
          {tabIndex === 0 ? (
            readBooks.length > 0 ? (
              readBooks.map((book) => <ReadList key={book.bookId} book={book} />)
            ) : (
              <p>No books have been marked as read yet.</p>
            )
          ) : wishListBooks.length > 0 ? (
            wishListBooks.map((book) => <WishList key={book.bookId} book={book} />)
          ) : (
            <p>No books are in your wishlist yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
