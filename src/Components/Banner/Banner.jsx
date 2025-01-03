import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <div className="bg-gray-200 p-6 rounded-2xl my-10 w-10/12 mx-auto">
            <div className="w-10/12 mx-auto my-12 flex justify-between">
                <div>
                    <h2 className="text-5xl mt-20 space-y-2 font-bold">Books to freshen up
                        <br />
                        your bookshelf</h2>
                    <Link to={'/listed'}>
                        <button className="bg-green-500 text-white py-1 mt-16 px-3 rounded-md">View The List</button>
                    </Link>
                </div>
                <div>
                    <img className="w-80 rounded-lg m-3" src="/src/assets/images/pexels-indraprojectsofficial-28716476.jpg" alt="" />
                </div>
            </div>


        </div>
    );
};

export default Banner;