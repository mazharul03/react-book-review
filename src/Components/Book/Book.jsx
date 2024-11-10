
const Book = ({ book }) => {

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher } = book;

    return (
        <div className=" border rounded-xl mx-auto h-96 w-80">
            <img className="h-52 w-72 mt-4 bg-zinc-100 py-6 px-8 rounded-xl mx-auto " src={image} alt="Shoes" />
            <div>
                <p className="bg-zinc-100">{tags[0]}</p>
            </div>

            <h2 className="">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
    );
};

export default Book;