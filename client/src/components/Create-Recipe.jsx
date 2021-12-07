import { React, useState, useEffect } from "react";
import {createRecipe, getDiets } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import style from './styles/Create-Recipe.module.css'

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
    }, [dispatch])

    return (
        <div className={style.container}>
           <h1 className={style.title}>Create your Recipe</h1> 
           <nav className={style.navbar}>
               <Link to='/home/recipes'>
                   <button className={style.btns}>Back to Home</button>
               </Link>
           </nav>
           <form onSubmit={e=>handleSubmit(e)} className={style.form}>
                <div className={style.inputContainer}>
                    <label>Name:</label>
					<input 
						type='text'
						name='name'
						placeholder='Name...'
                        required
                        value={input.name}
						onChange={e=>handleChange(e)}
					/>{ error.name &&  <p>{error.name}</p> } 
				</div>
                <div className={style.inputContainer}>
                    <label>Summary:</label>
                    <textarea
                        name='summary'
                        placeholder='Summary...'
                        required
                        value={input.summary}
						onChange={e=>handleChange(e)}
                    />{ error.summary &&  <p>{error.summary}</p> } 
                </div>
                <div className={style.inputContainer}>
                    <label>Score:</label>
                    <input 
                        type='number'
                        min='0' max='100'
                        name='score'
                        placeholder='Score...'
                        required
						value={input.score}
						onChange={e=>handleChange(e)}
                    />{ error.score &&  <p>{error.score}</p> } 
                </div>
                <div className={style.inputContainer}>
                    <label>Health score:</label>
                    <input 
                        type='number'
                        min='0' max='100'
                        name='health_score'
                        placeholder='Health score...'
                        required
                        value={input.health_score}
						onChange={e=>handleChange(e)}
                    />{ error.health_score &&  <p>{error.health_score}</p> } 
                </div>
                <div className={style.inputContainer}>
                    <label>Instructions:</label>
                    <textarea 
                        name='instructions'
                        placeholder='Instructions...'
                        required
                        value={input.instructions}
						onChange={e=>handleChange(e)}
                    />
                </div>
                
					{
                        diets && diets.map(d => (
                                <div key={d.id}>
                                    <label>{d.name}</label>
                                    <input 
                                    type='checkbox'
                                    name={d.name}
                                    placeholder={d.name}
                                    value={input.diets}
                                    onChange={e=>handleCheckBox(e)}                                
                                    />
                                </div>
                        ))
                    }
				
                
           </form>
           <button type='submit' className={style.btns}>Make recipe!</button>
        </div>
    )
}

export default CreateRecipe