import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";


const ListedBooks = () => {

    const  books = useLoaderData();
    useEffect(() =>{
        const storedBookIds = getStoredReadBooks();
        if(books.length > 0){
            const booksListed = books.filter(book =>)
        }
    },[])

    return (
        <div>
            <h2>Listed Books</h2>
        </div>
    );
};

export default ListedBooks;