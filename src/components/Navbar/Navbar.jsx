import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut();
    }

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li>
            {
                user ?
                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                    :
                    <NavLink to={'/Login'}>Login</NavLink>
            }
        </li>
    </>


    return (
        <div className="bg-dblue text-white sticky">
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <img src="/logo.png" alt="logo" className="w-24" />
                    <a className="btn btn-ghost normal-case md:inline lg:inline hidden text-xl">Virtual Victory Events</a>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ml-[-150px]">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;