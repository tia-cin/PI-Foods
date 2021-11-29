import React from "react";
import { Link } from "react-router-dom";

function CreateRecipe() {
    return (
        <div>
           <h1>Create your Recipe</h1> 
           <nav>
               <Link to='/home/recipes'>
                   <button>Back to Home</button>
               </Link>
           </nav>
           <form>
                <div>
					<input 
						type='text'
						name='name'
						placeholder='Name...'
                        required
					/>
				</div>
                <div>
                    <textarea
                        name='summary'
                        placeholder='Summary...'
                        required
                    />
                </div>
                <div>
                    <input 
                        type='number'
                        min='0' max='100'
                        name='score'
                        placeholder='Score...'
                        required
                    />
                </div>
                <div>
                    <input 
                        type='number'
                        min='0' max='100'
                        name='health_score'
                        placeholder='Health score...'
                        required
                    />
                </div>
                <div>
                    <textarea 
                        name='instructions'
                        placeholder='Instructions...'
                        required
                    />
                </div>
                <div>
					<input type='checkbox' value='Gluten Free' name='isGlutenFree' /> <label>Gluten Free</label> <br/>
					<input type='checkbox' value='Ketogenic' name='isKetogenic'  />  <label>Ketogenic</label> <br/>
					<input type='checkbox' value='Vegetarian' name='isVegetarian'  />  <label>Vegetarian</label> <br/>
					<input type='checkbox' value='Vegan' name='isVegan'  />  <label>Vegan</label> <br/>
					<input type='checkbox' value='Low FODMAP' name='isLowFodMAp'  />  <label>Low FODMAP</label> <br/>
					<input type='checkbox' value='Whole30' name='isWhole30'  />  <label>Whole30</label> <br/>
					<input type='checkbox' value='Lacto-Vegetarian' name='isLactoVegetarian'  />  <label>Lacto-Vegetarian</label> <br/>
					<input type='checkbox' value='Ovo-Vegetarian' name='isOvoVegetarian'  />  <label>Ovo-Vegetarian</label> <br/>
					<input type='checkbox' value='Pescetarian' name='isPascetarian'  />  <label>Pascetarian</label> <br/>
					<input type='checkbox' value='Paleo' name='isPaleo'  />  <label>Paleo</label> <br/>
					<input type='checkbox' value='Primal' name='isPrimal'  />  <label>Primal</label> <br/>
				</div>
                <button type='submit'>Make recipe!</button>
           </form>
        </div>
    )
}

export default CreateRecipe