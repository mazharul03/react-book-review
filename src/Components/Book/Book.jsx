
const Book = ({ book }) => {

    const { bookName, image } = book;

    return (
        <div className=" border-2 rounded-lg h-80 w-72">

            <img className="h-52 w-60 mt-4 bg-zinc-100 py-6 px-10 rounded-xl mx-auto " src={image} alt="Shoes" />
            <h2 className="">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
                
            
        </div>
    );
};

export default Book;