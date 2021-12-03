import { getRecipes } from '../actions'; // getRecipes
import { React, useEffect, useState } from 'react'; // hooks
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { Link } from 'react-router-dom';
import RecipeCard from './Recipe-Card'; // cartas
import SearchBar from './SearchBar'; // barra de busqueda

const Home = () => {
	const dispatch = useDispatch()
	const recipes = useSelector(state => state.recipes)
	const [page, setPage] = useState(1)
	const [name, setName] = useState('')
	const [order, setOrder] = useState('asc')
	const [diet, setDiet] = useState('')

	let handleClick = (e) => {
		e.preventDefault()
		// console.log('handleclick' +e, name, order, page, diet)
		dispatch(getRecipes(name, order, page, diet))
	}

	let handlePrev = (e) => {
		e.preventDefault()
		setPage(page - 9)
	}

	let handleNext = (e) => {
		e.preventDefault()
		setPage(page + 9)
	}

	useEffect(() => {
		dispatch(getRecipes(name, order, page, diet))
	}, [dispatch, name, order, page, diet])

    return (
        <div>
            <h1>Tasty Recipes</h1>
            <nav>
                <Link to='/home/recipe'>
                    <button>Create your own recipe!</button>
                </Link>
				<SearchBar />
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
            <button onClick={e=>handleClick(e)}>Get recipes</button>
			{
				recipes && recipes.map((r, i) => {
					return (
						<div key={i}>
							<RecipeCard name={r.name} diets={r.diets} img={r.img} id={r.id} />
						</div>
					)
				})
			}
			<button onClick={e => handlePrev(e)} disabled={page <= 0}>⬅️</button>
			<button onClick={e => handleNext(e)} disabled={recipes.length > 9}>➡️</button>
        </div> 
    )
}

export default Home