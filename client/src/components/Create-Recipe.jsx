import { React, useState, useEffect } from "react";
import {createRecipe, getDiets } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

function CreateRecipe() {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: '',
        summary: '',
        score: 0,
        health_score: 0,
        diets: [],
        instructions: '',
    })

    let validation = () => {
        let error = {}
        if(!input.name) {
            error.name = 'Name is required!'
        } else if(!input.summary) {
            error.summary = 'Summary is required!'
        } else if (!input.score) {
            error.score = 'Score must be a number between 0 and 100!'
        } else if (!input.health_score) {
            error.health_score = 'Health score must be a number between 0 and 100!'
        }
        return error
    }

    let handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setError(validation({
            ...input,
            [e.target.name] : e.target.value,
        }))
    }

    let handleCheckBox = (e) => {
        if(e.target.checked) {
            setInput({
                ...input,
                diets: e.target.value
            })
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createRecipe(input))
        setInput({
            name: '',
            summary: '',
            score: 0,
            health_score: 0,
            diets: [],
            instructions: '',
        })
    }

    useEffect(() => {
        dispatch(getDiets())
    }, [])

    return (
        <div>
           <h1>Create your Recipe</h1> 
           <nav>
               <Link to='/home/recipes'>
                   <button>Back to Home</button>
               </Link>
           </nav>
           <form onSubmit={e=>handleSubmit(e)}>
                <div>
					<input 
						type='text'
						name='name'
						placeholder='Name...'
                        required
                        value={input.name}
						onChange={handleChange}
					/>{ error.name &&  <p>{error.name}</p> } 
				</div>
                <div>
                    <textarea
                        name='summary'
                        placeholder='Summary...'
                        required
                        value={input.summary}
						onChange={handleChange}
                    />{ error.summary &&  <p>{error.summary}</p> } 
                </div>
                <div>
                    <input 
                        type='number'
                        min='0' max='100'
                        name='score'
                        placeholder='Score...'
                        required
						value={input.score}
						onChange={handleChange}
                    />{ error.score &&  <p>{error.score}</p> } 
                </div>
                <div>
                    <input 
                        type='number'
                        min='0' max='100'
                        name='health_score'
                        placeholder='Health score...'
                        required
                        value={input.health_score}
						onChange={handleChange}
                    />{ error.health_score &&  <p>{error.health_score}</p> } 
                </div>
                <div>
                    <textarea 
                        name='instructions'
                        placeholder='Instructions...'
                        required
                        value={input.instructions}
						onChange={handleChange}
                    />
                </div>
                <div>
					<input type='checkbox' value='Gluten Free' name='isGlutenFree' onChange={e=>handleCheckBox(e)}/> <label>Gluten Free</label> <br/>
					<input type='checkbox' value='Ketogenic' name='isKetogenic'  onChange={e=>handleCheckBox(e)}/>  <label>Ketogenic</label> <br/>
					<input type='checkbox' value='Vegetarian' name='isVegetarian'  onChange={e=>handleCheckBox(e)}/>  <label>Vegetarian</label> <br/>
					<input type='checkbox' value='Vegan' name='isVegan'  onChange={e=>handleCheckBox(e)}/>  <label>Vegan</label> <br/>
					<input type='checkbox' value='Low FODMAP' name='isLowFodMAp'  onChange={e=>handleCheckBox(e)}/>  <label>Low FODMAP</label> <br/>
					<input type='checkbox' value='Whole30' name='isWhole30'  onChange={e=>handleCheckBox(e)}/>  <label>Whole30</label> <br/>
					<input type='checkbox' value='Lacto-Vegetarian' name='isLactoVegetarian'  onChange={e=>handleCheckBox(e)}/>  <label>Lacto-Vegetarian</label> <br/>
					<input type='checkbox' value='Ovo-Vegetarian' name='isOvoVegetarian'  onChange={e=>handleCheckBox(e)}/>  <label>Ovo-Vegetarian</label> <br/>
					<input type='checkbox' value='Pescetarian' name='isPascetarian'  onChange={e=>handleCheckBox(e)}/>  <label>Pascetarian</label> <br/>
					<input type='checkbox' value='Paleo' name='isPaleo'  onChange={e=>handleCheckBox(e)}/>  <label>Paleo</label> <br/>
					<input type='checkbox' value='Primal' name='isPrimal'  onChange={e=>handleCheckBox(e)}/>  <label>Primal</label> <br/>
				</div>
                <button type='submit'>Make recipe!</button>
           </form>
        </div>
    )
}

export default CreateRecipe