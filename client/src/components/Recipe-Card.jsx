import React from "react";
import { Link } from 'react-router-dom';

const RecipeCard = ({name, img, diets, id}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{diets}</p>
            <img src={img} alt={name} width='100px' height='100px'/>
            <Link to={'/home/'+ id}><button>+</button></Link>
        </div>
    )
}

export default RecipeCard