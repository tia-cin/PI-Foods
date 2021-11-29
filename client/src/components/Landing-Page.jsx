import { Link } from 'react-router-dom'
import React from 'react'

const LandingPage = () =>{
    return (
        <div>
            <h1>Welcome to Diets App!</h1>
            <Link to='/home/recipes'>
                <button>Start</button>
            </Link>
        </div>
    )
}

export default LandingPage
