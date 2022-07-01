import React from 'react';
import {useNavigate } from 'react-router';
function HeroSec() {
  
    const navigate = useNavigate();
    
    return (
        <div className='hero-container'>
            <h1>
                REACT BEGINNER PROJECT
            </h1>
            <p>
                Click the button below to view the users table.
            </p>
            <button className='btn' onClick={()=> navigate("/users")}>
                View Users
            </button>
        </div>
    )
}

export default React.memo(HeroSec);