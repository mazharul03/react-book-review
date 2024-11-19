
const ReadList = ({ book }) => {

    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;

    return (
        <div className="border-2 rounded-xl flex my-8">
            <div>
                <img className="w-60 h-64 p-10 rounded-xl bg-gray-200 m-8" src={image} alt="" />
            </div>
            <div>

            </div>
            <h2>{bookName}</h2>
        </div>
    );
};

export default ReadList;