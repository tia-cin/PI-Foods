import React from "react";
import { Link } from "react-router-dom";
import style from './styles/Recipe-Card.module.css'

const RecipeCard = ({name, img, diets, id}) => {
    return (
        <div className={style.card}>
            <h3 className={style.name}>{name}</h3>
            <p className={style.diets}>{diets.join(', ')}</p>
            <img src={img} alt={name} width='100px' height='100px'/>
            <Link to={'/home/recipes/' + id} ><button>+</button></Link>
        </div>
    )
}

export default RecipeCard