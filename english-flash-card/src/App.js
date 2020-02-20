import React from 'react';
import Button from "@material-ui/core/Button";
import './App.css';
import _ from "underscore";


import Deck from "./components/Deck"
import Words from "./components/Words";
import FlashCard from "./components/FlashCard";
import { listDeckFromDb, listWordsFromDb } from "./fake_data.js";

//context api
import WordsContext from "./context/WordsContext"




function App() {
  const [listWords,setListWords]=React.useState([])
  const [listDecks,setListDecks]=React.useState([])
  
  const [currentDeck,setCurrentDeck]=React.useState({id:'',name:''})
  const [currentListWords,setCurrentListWords]=React.useState([])
  const [currentWord, setCurrentWord]=React.useState();

  
  const chooseDeck=(e,deck)=>{
    setCurrentDeck(deck);
    setCurrentListWords(_.filter(listWords, function(word){ return word.deck_id=== deck.id}))
  }

  const chooseCurrentWord=(e)=>{
    const index_random = Math.floor(
      Math.random() * (currentListWords.length - 0) + 0
    );
    setCurrentWord(currentListWords[index_random])
  }

  React.useEffect(
    ()=>{
      setListDecks(listDeckFromDb)
      setListWords(listWordsFromDb)
      
    },
  [])

  return (
    <div className="App">
      <WordsContext.Provider
        value={{
          listDecks,
          listWords,
          chooseDeck,
          currentDeck,
          currentListWords
        }}
      >
        {listDecks.length && <Deck />}
        <Button variant="contained" color="primary" onClick={chooseCurrentWord}>
          Study
        </Button>
        <hr></hr>

        {currentListWords.length>0 && (<><Words /><hr></hr></>)}

        {currentWord && <FlashCard word={currentWord} />}
      </WordsContext.Provider>
    </div>
  );
}

export default App;
