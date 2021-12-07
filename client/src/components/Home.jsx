import { filterByDiets, getDiets, getRecipes, orderRecipes } from '../actions'; // getRecipes
import { React, useEffect, useState } from 'react'; // hooks
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { Link } from 'react-router-dom';
import RecipeCard from './Recipe-Card'; // cartas
import SearchBar from './SearchBar'; // barra de busqueda
import Paginado from './Paginado';
import styles from './styles/Home.module.css'

const Home = () => {
	const dispatch = useDispatch()
	const { recipes, diets } = useSelector(state => state)

	// paginado
	let [page, setPage] = useState(1) // comienzo de paginado
	let [recipesXPage, setRecipesXPage] = useState(9)
	let lastPage = page * recipesXPage
	let firstPage = lastPage - recipesXPage
	let displayRecipes = recipes.slice(firstPage, lastPage)

	let handlePaginado = (pageNum) => {
		setPage(pageNum)
	}

	// filter by diets
	let handleDiets = (e) => {
		e.preventDefault()
		dispatch(filterByDiets(e.target.value))
	}

	// order
	let [order, setOrder] = useState('')

	let handleSort = (e) => {
		e.preventDefault()
		setOrder(e.target.value)
		dispatch(orderRecipes(order))
		setPage(1)
	}

	// display recipes
	let handleClick = (e) => {
		e.preventDefault()
		dispatch(getRecipes())
	}

	// useEffect
	useEffect(() => {
		dispatch(getRecipes())
		dispatch(getDiets())
	}, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tasty Recipes</h1>
            <nav className={styles.navbar}>
                <Link to='/home/recipe'>
                    <button className={styles.btns}>Create your own recipe!</button>
                </Link>
				<SearchBar />
                <label className={styles.labels}>Filter your recipes by:</label>
				<select onChange={e=>handleDiets(e)}>
					{
						diets && diets.map(d => (
							<option value={d.name} key={d.id}>{d.name}</option>
						))	
					}
				</select>
				<label className={styles.labels}>Order:</label>
				<select onChange={e=>handleSort(e)}>
					<option value='asc'>Ascendent</option>
					<option value='desc'>Descendent</option>
				</select>
            </nav>
            <button className={styles.btns} onClick={e=>handleClick(e)}>Get recipes</button>
			<Paginado recipesXPage={recipesXPage} recipes={recipes.length} handlePaginado={handlePaginado}/>
			<div className={styles.cardsContainer}>
				{
				displayRecipes && displayRecipes.map((r, i) => {
					return (
						<RecipeCard key={i} name={r.title} diets={r.diets} img={r.image} id={r.id} summary={r.summary} instructions={r.instructions} score={r.score} health_score={r.health_score} />
					)
				})
			}
			</div>
			
        </div> 
    )
}

export default Home