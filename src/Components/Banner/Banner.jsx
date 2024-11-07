
const Banner = () => {
    return (
        <div className="bg-gray-200 p-5 rounded-xl my-10 w-11/12 mx-auto">
            <div className="w-10/12 mx-auto my-12 flex justify-between">
                <div>
                    <h2 className="text-5xl my-12 space-y-2 font-bold">Books to freshen up 
                        <br />
                        your bookshelf</h2>
                    <button className="bg-green-500 text-white py-1 px-3 rounded-md">View The List</button>
                </div>
                <div>
                    <img className="w-72 rounded-lg m-3" src="/src/assets/images/pexels-indraprojectsofficial-28716476.jpg" alt="" />
                </div>
            </div>


        </div>
    );
};

export default Banner;