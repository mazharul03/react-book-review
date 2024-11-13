import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const books = useLoaderData();
    const {bookId} = useParams();
    console.log(bookId,books);

    return (
        <div>
            <h2>BookDetails</h2>
        </div>
    );
};

export default BookDetails;