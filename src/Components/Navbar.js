import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavTrue, setIsNavTrue] = useState(false)
    return (
        <div className="bg-base-100 flex justify-between w-full">
            {/* dropdown-menu for mobile devices */}
            <div className="dropdown w-36  md:hidden">
                <div className='flex '>
                    <label tabIndex={0} onClick={() => setIsNavTrue(!isNavTrue)} className=" btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                </div>
                <ul tabIndex={0} className={`${isNavTrue ? 'hidden' : 'block'} menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52`}>
                    <li><Link to='/' onClick={() => setIsNavTrue(!isNavTrue)}>Homepage</Link></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className=''>
                <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">Econs</Link>
            </div>
            <div className='hidden md:flex gap-3 items-center justify-center font-bold'>
                <Link to='/'>Home</Link>
                <Link to='/'>Order</Link>
                <Link to='/'>Card</Link>
            </div>
            <div className="flex justify-evenly items-center w-36">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle flex \">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <div className="dropdown">
                    <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end hidden md:block">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 h-8 bg-black rounded-full">
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;