import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


function Header() {

    const { user, loading, logOut } = useAuth();

    const NavLinks = () => {

        return <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/shop'>Shop</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
        </>
    }

    if(loading){
        <span className="loading loading-dots loading-lg"></span>
    }
    return <>
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-[#121212] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-3xl text-red-500 mystery-quest-regular">Wands & Crafts</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLinks></NavLinks>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
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
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-[#121212] z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                   {user ? 
                   <>
                     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  bg-[#121212] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link>Profile</Link></li>
                        <li><Link>Settings</Link></li>
                        <li><button onClick={()=>logOut()}>Logout</button></li>
                    </ul>
                   </> : 
                   <><Link to='/login'>Login</Link>
                   </>}
                </div>
            </div>
        </div>
    </>
}

export default Header;