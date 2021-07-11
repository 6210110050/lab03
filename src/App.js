import './App.css';
import React from 'react';
import WordCard from './WordCard';

const word = "Hello";
function App() {
 return (
 <div>
   {
     <WordCard value={word}/>
   }
 </div>
 );
}
export default App;