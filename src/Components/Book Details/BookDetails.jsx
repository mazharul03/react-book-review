import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const books = useLoaderData();
    const {bookId} = useParams();
    const book = books.find(book => book.bookId === bookId);
    console.log(book);

    return (
        <div>
            <div className="w-10/12 mt-12 mb-10 mx-auto gap-8 flex">
                <img className="w-2/4 bg-base-200 rounded-2xl h-[600px] p-12" src={book.image} alt="" />
                <div className="w-2/4 space-y-3">
                    <h2 className="text-5xl font-semibold">{book.bookName}</h2>
                    <p className="text-xl">By : {book.author}</p>
                    <div className="border-b-2 w-full border-solid border-gray-200"></div>
                    <p>{book.category}</p>
                    <div className="border-b-2 w-full border-solid border-gray-200"></div>
                    <p><span className="font-bold">Review :</span> {book.review}</p>
                    <div className="flex">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;