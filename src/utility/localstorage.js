const getStoredReadBooks = () =>{
    const storedReadBooks = localStorage.getItem ('read-books');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const saveReadBooks = id => {
    const storedReadBooks = getStoredReadBooks ();
    const exists = storedReadBooks.find(jobId => jobId === id);
    if (!exists){
        storedReadBooks.push(id);
        localStorage.setItem('red-books', JSON.stringify(storedReadBooks))
    }
}


export { getStoredReadBooks, saveReadBooks }