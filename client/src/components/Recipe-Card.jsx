import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecipeDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import style from './styles/Recipe-Card.module.css'

const RecipeCard = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    let recipe =useSelector(state => state.recipeDetail)

    useEffect(() => {
        dispatch(getRecipeDetail(props.match.params.id))
    }, [dispatch])

    return (
        <div className={style.card}>
            <h3 className={style.name}>{recipe[0].name}</h3>
            <p className={style.diets}>{recipe[0].diets.join(', ')}</p>
            <img src={recipe[0].img} alt={recipe[0].name} width='100px' height='100px'/>
            <Link to={'/home/recipes/' + recipe[0].id} ><button>+</button></Link>
        </div>
    )
}

export default RecipeCard