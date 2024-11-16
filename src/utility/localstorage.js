const getStoredReadBooks = () =>{
    const getStoredReadBooks = localStorage.getItem ('read-books');
    if(getStoredReadBooks){
        return JSON.parse(getStoredReadBooks);
    }
    return [];
}

const saveReadBooks = id => {

}


export { getStoredReadBooks, saveReadBooks }