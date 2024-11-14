import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams();
    const book = books.find(book => book.bookId === bookId);
    console.log(book);

    return (
        <div>
            <div className="w-10/12 mt-12 mb-10 mx-auto gap-8 flex">
                <img className="w-2/4 bg-base-200 rounded-2xl h-[600px] p-12" src={book.image} alt="" />
                <div className="w-2/4 space-y-5">
                    <h2 className="text-5xl font-semibold">{book.bookName}</h2>
                    <p className="mt-2">By : <span className="font-bold">{book.author}</span> </p>
                    <div className="border-b-2 w-full border-solid border-gray-200"></div>
                    <p className="text-xl">{book.category}</p>
                    <div className="border-b-2 w-full border-solid border-gray-200"></div>
                    <p><span className="font-bold">Review :</span> {book.review}</p>
                    <div className="flex gap-5">
                        <p className="font-bold">Tag</p>
                        <p className="bg-green-50 px-3 rounded-lg py-1 font-semibold text-green-600">#{book.tags[0]}</p>
                        <p className="bg-green-50 px-3 rounded-lg py-1 font-semibold text-green-600">#{book.tags[1]}</p>
                    </div>
                    <div className="border-b-2 w-full border-solid border-gray-200"></div>
                    <div className="flex gap-12">
                        <div className="space-y-3">
                            <h3>Number of Pages :</h3>
                            <h3>Publisher :</h3>
                            <h3>Year of Publishing :</h3>
                            <h3>Rating  :</h3>
                        </div>
                        <div className="space-y-3 font-bold">
                            <h3>{book.totalPages}</h3>
                            <h3>{book.publisher}</h3>
                            <h3>{book.yearOfPublishing}</h3>
                            <h3>{book.rating}</h3>

                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg border border-gray-400 hover:bg-green-500 hover:text-white transition duration-200">
                            Read
                        </button>
                        <button className="bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg border border-cyan-700 hover:bg-cyan-600 transition duration-200">
                            Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;