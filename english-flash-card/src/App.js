import React from 'react';
import _ from "underscore"

import logo from './logo.svg';
import './App.css';
import FlashCard from './flashCard';
import Deck from "./components/Deck"

//context api
import WordsContext from "./context/WordsContext"

import {listDeckFromDb,listWordsFromDb} from './fake_data.js'

function App() {
  const [listWords,setListWords]=React.useState([])
  const [listDecks,setListDecks]=React.useState([])
  
  const [currentDeckId,setCurrentDeckId]=React.useState(0)
  const [currentListWords,setCurrentListWords]=React.useState([])

  //const [idWord, setIdWord] = React.useState(0);

  
  const chooseDeck=(e,deck_id)=>{
    setCurrentDeckId(deck_id)
    setCurrentListWords(_.filter(listWords, function(word){ return word.deck_id=== deck_id}))
  }

  React.useEffect(
    ()=>{
      setListDecks(listDeckFromDb)
      setListWords(listWordsFromDb)
      // const index_random = Math.floor(Math.random() * (listWordsFromDb.length - 0) + 0);
      // setIndex(index_random);
      
    },
  [])

  return (
    <div className="App">
      <WordsContext.Provider value={{listDecks,listWords,chooseDeck,currentDeckId,currentListWords}}>
      {/* {listWords.length &&
      <FlashCard word={listWords[index]} />} */}
      {listWords.length&&<Deck/>}
      </WordsContext.Provider>
    </div>
  );
}

export default App;
