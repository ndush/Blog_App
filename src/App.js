import React, {useState} from 'react';
import Posts from './components/Posts'
import './App.css'
function App() {
  const [posts, setPosts] = useState([])
  return (
    <>
      <Posts/>
      <input type="text" placeholder/>
      <button type="submit">submit</button>
    </>
    
  )
}

export default App;
