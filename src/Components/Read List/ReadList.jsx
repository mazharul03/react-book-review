
const ReadList = ({book}) => {
 
    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;

    return (
        <div>
            <div>
        <img src={image} alt="" />
            </div>
            <div>

            </div>
            <h2>{bookName}</h2>
        </div>
    );
};

export default ReadList;