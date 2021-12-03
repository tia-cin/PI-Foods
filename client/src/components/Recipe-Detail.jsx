import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, React} from 'react'
import { getRecipeDetail } from "../actions";

function RecipeDetail(props) {
    const dispatch = useDispatch();
    const recipeDetail = useSelector(state => state.recipeDetail)

    useEffect(() => {
        dispatch(getRecipeDetail(props.match.params.idRecipe))
    }, [dispatch])

    return (
        <div>
           <h1>Detail: </h1>
            <nav>
                <Link to='/home/recipes'>
                    <button>Back to Home</button>
                </Link>
            </nav> 
            {
                recipeDetail[0] ?
                <div>
                    <h1>{recipeDetail[0].name}</h1>
                    <h3>{recipeDetail[0].diets}</h3>
                    <h3>{recipeDetail[0].summary}</h3>
                    <h3>{recipeDetail[0].score}</h3>
                    <h3>{recipeDetail[0].health_score}</h3>
                    <h3>{recipeDetail[0].instructions}</h3>
                    <img src={recipeDetail[0].img} width='100px' height='100px' alt='recipe'/>
                </div> :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default RecipeDetail