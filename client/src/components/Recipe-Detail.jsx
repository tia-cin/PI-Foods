import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, React} from 'react'
import { getRecipeDetail } from "../actions";

function RecipeDetail(props) {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipeDetail)
    console.log(props)
    useEffect(() => {
        dispatch(getRecipeDetail())
    }, [dispatch])

    return (
        <div>
           <h1>Detail: </h1>
            <nav>
                <Link to='/home/recipes'>
                    <button>Back to Home</button>
                </Link>
            </nav> 
            {/* {
                recipe ?
                <div>
                   	<h1>{name}</h1>
					<img src={img} width='200px' heigth='200px' alt={name}/>
					<h3>Diets: {diets}</h3>
					<h3>Summary: {summary}</h3>
					<h3>Score: {score}</h3>
					<h3>Health score: {health_score}</h3>
					<h3>Instructions: {instructions}</h3>
				</div>  : 
				<h1>Loading...</h1>
            } */}
        </div>
    )
}

export default RecipeDetail