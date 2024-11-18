import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({ book }) => {

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher } = book;

    return (
        <Link to={`/bookDetails/${bookId}`} >
            <div className="border rounded-2xl mx-auto h-[420px] w-[330px]">
                <img className="h-52 w-72 mt-5 bg-zinc-100 py-6 px-6 rounded-xl mx-auto " src={image} alt="Shoes" />
                <div className="flex mx-5 my-4 gap-3">
                    <p className="bg-green-50 px-3 rounded-lg py-1 font-semibold text-green-600">{tags[0]}</p>
                    <p className="bg-green-50 px-3 rounded-lg py-1 font-semibold text-green-600">{tags[1]}</p>
                </div>
                <p className="text-2xl font-semibold ml-4">{bookName}</p>
                <p className="ml-4 text-sm mt-1"> By : {author}</p>
                <div className="border-t-2 border-dashed border-gray-200 w-11/12 mx-auto mt-3"></div>
                <div className="ml-4 mt-2 mr-4 flex justify-between">
                    <p>{category}</p>
                    <div className="flex">
                        <p>{rating}</p>
                        <p className="text-2xl ml-1"><CiStar /></p>
                    </div>

                </div>


            </div>
        </Link>
    );
};

export default Book;