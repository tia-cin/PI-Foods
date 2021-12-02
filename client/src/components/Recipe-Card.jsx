import React from "react";

const RecipeCard = ({name, img, diets}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{diets}</h4>
            <img src={img} alt={name} width='100px' height='100px'/>
        </div>
    )
}

export default RecipeCard