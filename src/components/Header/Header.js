import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

export const Header = () => {
  console.log(process.env);
  const [term, setTerm] = useState("");
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Search input can't be blank")
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" 
        value={term} 
        placeholder="Search" 
        onChange={(e) => setTerm(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
