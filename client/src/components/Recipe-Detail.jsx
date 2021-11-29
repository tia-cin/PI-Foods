import React from "react";
import { Link } from "react-router-dom";

function RecipeDetail() {
    return (
        <div>
           <h1>Recipe Detail: </h1>
            <nav>
                <Link to='/home/recipes'>
                    <button>Back to Home</button>
                </Link>
            </nav> 
        </div>
    )
}

export default RecipeDetail