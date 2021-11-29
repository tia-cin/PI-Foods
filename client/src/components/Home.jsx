// import { getRecipes } from '../actions';
import { React, /*useState, useEffect*/ } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1>Spoonacular Recipes</h1>
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
            <button>Get all recipes</button>
        </div> 
    )
}

export default Home