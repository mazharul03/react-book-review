import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listed'> Listed Books </NavLink></li>
        <li><NavLink to='/pages'> Pages To Read </NavLink></li>
        <li><NavLink to='/about'> About </NavLink></li>
        <li><NavLink to='/contact'> Contact </NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 mt-5 w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                    </ul>
                </div>
                <a className="font-bold text-green-600 text-3xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button className="bg-green-500 text-white py-1 px-3 rounded-md">Sign In</button>
                <button className="bg-cyan-500 py-1 px-3 rounded-md text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;