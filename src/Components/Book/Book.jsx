
const Book = ({ book }) => {

    const { bookName, image } = book;

    return (
        <div className=" border-2 bg-base-100">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;