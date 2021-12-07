import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, React} from 'react'
import { getRecipeDetail } from "../actions";
import style from './styles/Recipe-Detail.module.css'

function RecipeDetail() {
    const dispatch = useDispatch();
    const { recipeDetail } = useSelector(state => state)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getRecipeDetail(id))
    }, [dispatch, id])

    return (
        <div className={style.container}>
           <h1 className={style.title}>Detail: </h1>
            <nav className={style.navbar}>
                <Link to='/home/recipes'>
                    <button className={style.btn}>Back to Home</button>
                </Link>
            </nav> 
            {
                recipeDetail ?
                <div className={style.infoContainer}>
                   	<h3 className={style.info}>Name:</h3>
                       <p>{recipeDetail.name}</p>
					<h3 className={style.info}>Diets:</h3>
                        <p>{recipeDetail.diets.join(', ')}</p>
					<h3 className={style.info}>Summary: </h3>
                        <p>{recipeDetail.summary.replace(/<[^>]*>?/g)}</p>
					<h3 className={style.info}>Score: </h3>
                        <p>{recipeDetail.score}</p>
					<h3 className={style.info}>Health score: </h3>
                        <p>{recipeDetail.health_score}</p>
					<h3 className={style.info}>Instructions: </h3>
                        <p>{recipeDetail.instructions.replace(/<[^>]*>?/g)}</p>
                    <img src={recipeDetail.img} width='200px' heigth='200px' alt={recipeDetail.name}/>
				</div>  : 
				<h1>Loading...</h1>
            }
        </div>
    )
}

export default RecipeDetail