import { GrLocation } from "react-icons/gr";

const ReadList = ({ book }) => {

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
                    <p className="bg-green-50 px-3 rounded-3xl py-2 font-semibold text-green-600">#{book.tags[0]}</p>
                    <p className="bg-green-50 px-3 rounded-3xl py-2 font-semibold text-green-600">#{book.tags[1]}</p>
                    <div className="flex items-center gap-2">
                        <p className="text-xl"><GrLocation /></p>
                        <p> Year of Publishing : {yearOfPublishing}</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default ReadList;