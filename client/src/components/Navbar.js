import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Navbar = () => {

    return (
        <nav className='flex flex-row justify-end space-x-16 p-10 border-y-4'>
            <Link to="/"><div>Home</div></Link>
            <Link to="/"><div>Profile</div></Link>
            <Link to="/"><div>Login (WIP)</div></Link>
        </nav>
    )


}