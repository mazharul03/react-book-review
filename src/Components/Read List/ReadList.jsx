
const ReadList = ({book}) => {

    console.log(book);
 
    const {bookName} = book;

    return (
        <div>
            <h2>{bookName}</h2>
        </div>
    );
};

export default ReadList;