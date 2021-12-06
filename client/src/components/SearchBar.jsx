import { filterByName } from '../actions';
import { useState, React} from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    let handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(filterByName(name))
    }

    return (
        <form onSubmit={e=>handleSubmit(e)}>
            <input
                type='text'
                placeholder='Search recipe...'
                onChange={e=>handleName(e)}
            />
            <button type='submit' onClick={e=>handleSubmit(e)}>🔍</button>
        </form>
    )
}
export default SearchBar