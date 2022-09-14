import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import styled from "styled-components";
import TopTenMovies from './components/TopTenMovies';


const Pagination = styled.div`
  color: #fff;
  display: flex;
  padding: 0 30px;
  
  div{
    padding: 0 10px;
  }
`
const APY_KEY = 'api_key=12ab9a457bd8ad0e53ef7c9cdf45d90c';
const BASE_URL = 'https://api.themoviedb.org/3';
// const API_URL = BASE_URL + '/discover/movie?.desc&' +APY_KEY

const allMovies = (params) => {
  return fetch(`${BASE_URL}/movie/top_rated?${APY_KEY}&page=${params}`).then(response => response.json()).catch(console.err)
}
function App() {
  const [popular, setPopular] = useState([])
  const [output, setOutput] = useState([])  
  const [count, setCount] = useState(1)  

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if(count < 2) return 1
    setCount(count - 1)
  }
  
  useEffect(()=>{
    allMovies(count).then(({results}) => setPopular(results))
  },[count])
  

  const handleSetOutput = (title) => {
    setOutput(title)
  }

  const handleOutput = () => {
    return output
  }
  
  return (
    <div className="App">
      <Header handleOutput={handleOutput} handleSetOutput={handleSetOutput}/>
      <TopTenMovies popular={popular}/>
      <Pagination>
        <button onClick={decrement}>previous</button>
        <div>{count}</div>
        <button onClick={increment}>next</button>
      </Pagination>
      <Movies popular={popular} handleOutput={handleOutput}/>
    </div>
  );
}

export default App;
