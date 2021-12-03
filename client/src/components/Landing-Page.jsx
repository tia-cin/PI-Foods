import { Link } from 'react-router-dom'
import React from 'react'
import { div, h1, btn } from './Landing-Page.module.css'

const LandingPage = () =>{
    return (
        <div className={div}>
            <h1 className={h1}>Welcome to Diets App!</h1>
            <Link to='/home/recipes'>
                <button className={btn}>Start</button>
            </Link>
        </div>
    )
}

export default LandingPage
