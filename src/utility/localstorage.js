const getStoredReadBooks = () =>{
    const storedReadBooks = localStorage.getItem ('read-books');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const getStoredWishList = () =>{
    const storedWishList = localStorage.getItem ('wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}

const saveReadBooks = id => {
    const storedReadBooks = getStoredReadBooks ();
    const exists = storedReadBooks.find(bookId => bookId === id);
    if (!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks))
    }
}

const saveWishList = id => {
    const storedWishList = getStoredWishList ();
    const exists = storedWishList.find(bookId => bookId === id);
    if (!exists){
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList))
    }
}


export { getStoredReadBooks, saveReadBooks, getStoredWishList, saveWishList }