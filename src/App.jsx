import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import Header from './components/header/Header';

function App() {
const [blogData, setblogData] = useState([]);

  useEffect(() => {
    fetch("../public/blog.json")
    .then(res => res.json())
    .then(data => setblogData(data))
  }, [])
console.log(blogData);
  return (
    <>
    <Header/>
      <h1 className='text-3xl font-light text-red-600'>hi i am program</h1>
    </>
  )
}

export default App
