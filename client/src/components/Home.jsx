import { getRecipes } from '../actions';
import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeCard from './Recipe-Card';

const Home = () => {
	const dispatch = useDispatch()
	const recipes = useSelector(state => state.recipes)

	let handleClick = (e) => {
		e.preventDefault()
		dispatch(getRecipes({}))
	}
	// useEffect(() => {
		
	// }, [dispatch])

    return (
        <div>
            <h1>Tasty Recipes</h1>
            <nav>
                <Link to='/home/recipe'>
                    <button>Create your own recipe!</button>
                </Link>
                <label>Filter your recipes by:</label>
				<select>
					<option value='isGlutenFree'>Gluten Free</option>
					<option value='isKetogenic'>Ketogenic</option>
					<option value='isVegetarian'>Vegetarian</option>
					<option value='isVegan'>Vegan</option>
					<option value='isLowFodmap'>Low FODMAP</option>
					<option value='isWhole30'>Whole30</option>
				</select>
				<label>Order:</label>
				<select>
					<option value='ascendent'>Ascendent</option>
					<option value='descendent'>Descendent</option>
				</select>
            </nav>
            <button onClick={e=>handleClick(e)}>Get all recipes</button>
			{
				recipes && recipes.map((r, i) => {
					return <RecipeCard name={r.name} diets={r.diets} img={r.img} key={i} />
				})
			}
        </div> 
    )
}

export default Home