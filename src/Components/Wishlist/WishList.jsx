
import { GrLocation } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";

const WishList = ({ book }) => {

    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;

    return (
        <div className="border-2 rounded-xl flex my-8">
            <div>
                <img className="w-60 h-64 p-10 rounded-xl bg-gray-200 m-8" src={image} alt="" />
            </div>
            <div className="space-y-3">
                <h2 className="text-2xl mt-7 font-bold">{bookName}</h2>
                <h1> By : {author}</h1>
                <div className="flex items-center gap-5">
                    <p className="font-bold text-xl">Tag</p>
                    <p className="bg-green-50 px-3 rounded-3xl py-2 font-semibold text-green-600">#{tags[0]}</p>
                    <p className="bg-green-50 px-3 rounded-3xl py-2 font-semibold text-green-600">#{tags[1]}</p>
                    <div className="flex items-center gap-2">
                        <p className="text-xl"><GrLocation /></p>
                        <p> Year of Publishing : {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="text-gray-500 flex gap-4">
                    <div className="flex items-center gap-2">
                        <p className="text-xl"> <GoPeople /> </p>
                        <p>  Publisher : {publisher}</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-xl"><BsFillFileEarmarkBarGraphFill /></p>
                        <p> Page {totalPages}</p>

                    </div>

                </div>
                
                <hr className="border"/>
                
                <div className="flex gap-5">
                    <p className="text-blue-700 bg-blue-100 py-1 px-3 rounded-full"> Category : {category}</p>
                    <p className=" text-orange-400 bg-orange-50 py-1 px-3 rounded-full"> Rating : {rating }</p>
                    <button className="text-white bg-green-500 py-1 px-3 rounded-full"> View Details </button>
                </div>

            </div>
        </div>
    );
};

export default WishList;


