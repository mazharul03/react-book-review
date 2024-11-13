import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const books = useLoaderData();
    const {bookId} = useParams();
    const book = books.find(book => book.bookId === bookId);
    console.log(book);

    return (
        <div>
            <div className="w-10/12 mx-auto flex">
                <img className="" src={book.image} alt="" />
                <div>
                    <h2>{book.bookName}</h2>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;